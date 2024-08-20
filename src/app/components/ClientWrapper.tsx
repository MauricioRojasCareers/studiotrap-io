// src/app/components/ClientWrapper.tsx (Client Component)
"use client"; // Mark this as a client-side component

import { SessionProvider } from "next-auth/react";
import Navbar from "./NavBar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  );
}
