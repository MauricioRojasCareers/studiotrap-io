import React from "react";

export default function CustomerDetails() {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      dateOfUse: "2024-08-15",
      checkIn: "10:00 AM",
      timeSpent: "3 hours",
    },
    {
      id: 2,
      name: "Jane Smith",
      dateOfUse: "2024-08-16",
      checkIn: "1:00 PM",
      timeSpent: "2 hours",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Customer Details</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Date of Use
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
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-4 py-2 text-sm whitespace-nowrap">
                {customer.name}
              </td>
              <td className="px-4 py-2 text-sm whitespace-nowrap">
                {customer.dateOfUse}
              </td>
              <td className="px-4 py-2 text-sm whitespace-nowrap">
                {customer.checkIn}
              </td>
              <td className="px-4 py-2 text-sm whitespace-nowrap">
                {customer.timeSpent}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
