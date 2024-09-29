import React from "react";
import DashboardCard from "./DashboardCard";

export default function () {
  return (
    <>
      {/* Ensure the yellow container doesn't scroll */}
      <div className="w-full h-full container mx-auto overflow-hidden overflow-y-auto pt-20 pb-6 text-black block md:hidden lg:hidden">
        {/* Add padding to account for navbar height */}
        <DashboardCard />
      </div>
    </>
  );
}
