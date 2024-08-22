import { useState } from "react";
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

  const handleSelect = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="flex flex-col md:flex-row items-center border border-gray-300 md:rounded-full shadow-md p-2 bg-white">
        {/* Location Input */}
        <div className="flex items-center border-b md:border-b-0 md:border-r w-full px-4 py-2 md:w-auto border-gray-200  ">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="focus:outline-none w-full"
          />
        </div>

        {/* Date Picker */}
        <div
          className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 relative cursor-pointer w-full md:w-auto"
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <span className=" md:hidden lg:inline text-gray-700">
            {`${dateRange[0]?.startDate?.toDateString() || ""} - ${
              dateRange[0]?.endDate?.toDateString() || ""
            }`}
          </span>

          {showDatePicker && (
            <div className="absolute top-full mt-2 z-50 bg-white shadow-lg rounded-lg">
              <DateRange
                ranges={dateRange}
                onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                rangeColors={["#FD5B61"]}
              />
            </div>
          )}
        </div>

        {/* Guests Dropdown */}
        <div
          className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 relative cursor-pointer w-full md:w-auto"
          onClick={() => setShowGuestDropdown(!showGuestDropdown)}
        >
          <FaUser className="text-gray-500 mr-2" />
          <span className="text-gray-700 text-center">
            {guests} Guest{guests > 1 && "s"}
          </span>
          {showGuestDropdown && (
            <div className="absolute top-full mt-2 z-50 bg-white shadow-lg rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span>Guests: </span>
                <div className="flex items-center">
                  <button
                    onClick={() => setGuests(guests > 1 ? guests - 1 : 1)}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span className="mx-2">{guests}</span>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="flex justify-center items-center w-full px-2 py-2 md:w-auto md:mx-auto ">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full flex items-center w-full ">
            <FaSearch className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
