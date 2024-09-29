import DashboardCard from "./DashboardCard";
import DesktopDashboard from "./DesktopDashboard";
import MobileDashBoard from "./MobileDashBoard";
import * as React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileDashBoard />

      {/* Destop Dashboard View --- Layout Extracted and page gets rendered from DesktopDashboard */}

      <div className="w-full h-screen p-2 hidden md:block lg:block">
        <div className="flex w-full md:px-16 md:py-4 p-4 mb-20 h-full">
          {/* Sidebar Title */}
          <div className="hidden lg:block lg:w-[33%] md:w-[20%] p-2 overflow-y-auto max-h-screen mt-14 lg:text-lg md:text-md text-xs">
            <div className="flex flex-col gap-2">
              <div className="w-full flex items-center justify-center ">
                <p className="text-center w-[20%] truncate border-2 border-purple-300 bg-black rounded-full text-white text-xs leading-none tracking-tight py-2 px-2 fixed mt-4">
                  From Layout: "Hello World"{" "}
                </p>
              </div>
              {/* Sidebar Content */}
              <div className="space-y-4 text-right p-8 text-black">
                {[...Array(150)].map((_, index) => (
                  <div
                    className="flex flex-row gap-2  border-4 border-x-black"
                    key={index}
                  >
                    <p className="bg-purple-300 w-[33%] text-xs p-4 truncate text-wrap">
                      Dashboard Item Name
                    </p>

                    <p>Item {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Main Panel on right side of desktop screen */}
          <DesktopDashboard children={children} />
        </div>
      </div>
    </>
  );
}
