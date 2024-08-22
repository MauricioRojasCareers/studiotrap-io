import React from "react";

export default function BookingsTable() {
  const bookings = [
    {
      id: 1,
      name: "John Doe",
      date: "2024-08-15",
      checkIn: "10:00 AM",
      timeSpent: "3 hours",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2024-08-16",
      checkIn: "1:00 PM",
      timeSpent: "2 hours",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Latest Bookings</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Check-In
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Time Spent
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-4 py-2 whitespace-nowrap">{booking.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{booking.date}</td>
              <td className="px-4 py-2 whitespace-nowrap">{booking.checkIn}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                {booking.timeSpent}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
