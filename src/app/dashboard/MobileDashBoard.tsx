import React from "react";
import DashboardCard from "./DashboardCard";
import Spinner from "../components/Navbar/Spinner";

export default function MobileDashBoard() {
  return (
    // Layout for Mobile Dashboard View
    <div
      className="
      w-full h-full container mx-auto 
      overflow-hidden overflow-y-auto 
      pt-20 pb-6
       text-black 
      block md:hidden lg:hidden"
    >
      <DashboardCard />
      <DashboardCard />

      <DashboardCard />

      <DashboardCard />

      <DashboardCard />

      <DashboardCard />

      <DashboardCard />

      <DashboardCard />

      <DashboardCard />
    </div>
  );
}
