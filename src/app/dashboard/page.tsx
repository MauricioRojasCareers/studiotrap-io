import React from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaClipboardList,
  FaCog,
  FaBook,
} from "react-icons/fa"; // Import icons from react-icons
import BookingsTable from "../components/dashboard/BookingsTable";
import CustomerDetails from "../components/dashboard/CustomerDetails";
import RevenueCard from "../components/dashboard/RevenueCard";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

// Sidebar component
function Sidebar() {
  return (
    <aside className="w-48 bg-[#ffd6ff] p-4 shadow-md fixed h-full">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-[#33134A] rounded-full w-8 h-8"></div>
        <h1 className="font-semibold text-md text-white">Mitte Studios</h1>
      </div>
      <nav>
        <ul className="space-y-3">
          <li>
            <button className="font-semibold text-white flex items-center space-x-3 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:bg-white/20 rounded-lg p-2 w-full">
              <FaHome /> <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button className="text-[#33134A] font-semibold flex items-center space-x-3 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:bg-white/20 rounded-lg p-2 w-full">
              <FaClipboardList /> <span>Bookings</span>
            </button>
          </li>
          <li>
            <button className="text-[#33134A] font-semibold flex items-center space-x-3 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:bg-white/20 rounded-lg p-2 w-full">
              <FaCalendarAlt /> <span>Calendar</span>
            </button>
          </li>
          <li>
            <button className="text-[#33134A] font-semibold flex items-center space-x-3 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:bg-white/20 rounded-lg p-2 w-full">
              <FaBook /> <span>Availability</span>
            </button>
          </li>
          <li>
            <button className="text-[#33134A] font-semibold flex items-center space-x-3 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:bg-white/20 rounded-lg p-2 w-full">
              <FaCog /> <span>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-4 p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-[#33134A] rounded-full w-8 h-8"></div>
          <div>
            <p className="font-semibold text-white text-sm">John Appleseed</p>
            <p className="text-white text-xs">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

// Main Dashboard
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Dashboard Content */}
      <div className="flex-1 max-w-5xl p-6 m-4 ml-56 bg-white/10 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* New Bookings */}
          <div className="bg-white/10 shadow-md rounded-lg p-4 hover:bg-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)]">
            <h2 className="text-md font-semibold text-white mb-2">
              New Bookings
            </h2>
            <p className="text-2xl font-bold text-white">5</p>
            <p className="text-green-300 mt-1">+17% since last month</p>
          </div>
          {/* Revenue */}
          <div className="shadow-md rounded-lg p-4 bg-white/10 hover:bg-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)]">
            <RevenueCard />
          </div>
          {/* Date & Upcoming */}
          <div className="bg-white/10 shadow-md rounded-lg p-4 hover:bg-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)]">
            <h2 className="text-md font-semibold text-white mb-2">
              October 2022
            </h2>
            <p className="text-xl font-bold text-white mb-2">Tuesday, 25</p>
            <div className="mt-2 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-300 rounded-full w-6 h-6"></div>
                  <span className="text-white text-sm">Matt Walsh</span>
                </div>
                <span className="text-gray-200 text-sm">12:00 - 15:00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-300 rounded-full w-6 h-6"></div>
                  <span className="text-white text-sm">Isaac Mann</span>
                </div>
                <span className="text-gray-200 text-sm">15:00 - 18:00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-300 rounded-full w-6 h-6"></div>
                  <span className="text-white text-sm">Emily Parsons</span>
                </div>
                <span className="text-gray-200 text-sm">18:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* New Customers Graph */}
        <div className="bg-white/10 shadow-md rounded-lg p-4 mb-6 hover:bg-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)]">
          <h2 className="text-md font-semibold text-white mb-2">
            New Customers
          </h2>
          {/* Placeholder for Graph */}
          <div className="bg-gray-300 h-32 rounded-lg"></div>
        </div>

        {/* Bookings Table and Customer Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="shadow-md rounded-lg bg-white/10 p-4 hover:bg-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)]">
            <BookingsTable />
          </div>
          <div className="shadow-md rounded-lg bg-white/10 p-4 hover:bg-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)]">
            <CustomerDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
