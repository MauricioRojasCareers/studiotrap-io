import React from "react";

export default function () {
  return (
    <div className="bg-red-300 h-screen w-screen px-4 block md:hidden lg:hidden pt-[4rem]">
      {/* Ensure the yellow container doesn't scroll */}
      <div className="bg-yellow-300 w-full text-black flex flex-col h-full">
        {/* Add padding to account for navbar height */}
        <p>Hello from inside</p>
      </div>
    </div>
  );
}
