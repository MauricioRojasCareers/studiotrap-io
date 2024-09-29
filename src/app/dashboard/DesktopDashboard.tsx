import React from "react";

export default function DesktopDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 flex-grow overflow-y-auto mt-14  max-h-screen">
      {children}
    </div>
  );
}
