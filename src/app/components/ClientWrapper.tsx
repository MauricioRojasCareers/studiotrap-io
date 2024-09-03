"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import { usePathname } from "next/navigation";

interface ClientWrapperProps {
  children: React.ReactNode;
  session: Session | null;
}

const ClientWrapper = ({ children, session }: ClientWrapperProps) => {
  const path = usePathname();
  const isHomePath = path === "/";
  return (
    <SessionProvider session={session}>
      {isHomePath ? (
        <div className="h-screen overflow-hidden">{children}</div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      )}
    </SessionProvider>
  );
};

export default ClientWrapper;
