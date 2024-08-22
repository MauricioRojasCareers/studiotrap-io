import React from "react";

export default function RevenueCard() {
  const totalRevenue = "$2,500";

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Total Revenue</h2>
      <p className="text-3xl font-semibold">{totalRevenue}</p>
    </div>
  );
}
