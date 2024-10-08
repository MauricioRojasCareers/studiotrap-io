import { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function AdvancedSearchBar() {
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [guests, setGuests] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  // Refs to detect clicks outside the calendar and guest dropdown
  const guestDropdownRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleSelect = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  // Function to handle clicks outside the dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        guestDropdownRef.current &&
        !guestDropdownRef.current.contains(event.target as Node)
      ) {
        setShowGuestDropdown(false);
      }

      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [guestDropdownRef, calendarRef]);

  return (
    <div className=" max-w-4xl mx-auto py-4 ">
      <div className="flex flex-col md:flex-row items-center border border-gray-300 md:rounded-full shadow-md p-2 bg-white">
        {/* Location Input */}
        <div className="flex items-center border-b md:border-b-0 md:border-r w-full px-4 py-2 md:w-auto border-gray-200 ">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="focus:outline-none   whitespace-normal md:whitespace-nowrap overflow-hidden md:overflow-ellipsis text-xs"
          />
        </div>

        {/* Date Picker */}
        <div
          className="relative w-full md:w-auto justify-center "
          ref={calendarRef}
        >
          <div
            className="flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 cursor-pointer w-full md:w-auto gap-2"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <FaCalendarAlt className="text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis mr-2" />
            <span className="text-gray-700 whitespace-normal md:whitespace-nowrap overflow-hidden md:overflow-ellipsis text-xs ">
              {`${dateRange[0]?.startDate?.toDateString() ?? ""} -`}
              <br className="md:hidden" />
              {`${dateRange[0]?.endDate?.toDateString() ?? ""}`}
            </span>
          </div>
          {showDatePicker && (
            <div
              className="absolute top-full w-full flex justify-center mt-2 z-50 shadow-lg rounded-lg bg-white/10 p-4 hover:bg-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <DateRange
                ranges={dateRange}
                onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                rangeColors={["#b354e7"]}
                minDate={new Date()} // This prevents selecting dates before today
              />
            </div>
          )}
        </div>

        {/* Guests Dropdown */}
        <div className="relative w-full md:w-auto " ref={guestDropdownRef}>
          <div
            className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 cursor-pointer w-full md:w-auto md:whitespace-nowrap overflow-hidden md:overflow-ellipsis"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
          >
            <FaUser className="text-gray-500 mr-2" />
            <span className="text-gray-700 text-center text-xs">
              {guests} Guest{guests > 1 && "s"}
            </span>
          </div>
          {showGuestDropdown && (
            <div className="absolute top-full mt-2 z-50 bg-white shadow-lg rounded-lg p-4">
              <div className="flex items-center justify-between gap-1">
                <p className="text-gray-700 font-semibold">Guests:</p>
                <div className="flex items-center">
                  <button
                    onClick={() => setGuests(guests > 1 ? guests - 1 : 1)}
                    className="bg-[#b354e7] text-white px-3 py-1 rounded-full text-lg"
                  >
                    -
                  </button>
                  <span className="mx-2">{guests}</span>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="bg-[#b354e7] text-white px-3 py-1 rounded-full text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="flex justify-center items-center w-full md:w-auto mt-2 md:mt-0  md:mx-auto p-2">
          <button className="bg-white/10 text-[#b354e7] px-4 py-2 rounded-full flex items-center  hover:bg-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)] gap-2 ">
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}
