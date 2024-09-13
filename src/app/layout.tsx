// src/app/layout.tsx (Server Component)
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../server/auth";

import ClientWrapper from "./components/ClientWrapper";
import Navbar from "./components/Navbar/NavBar";

export const metadata = {
  title: "StudioTrap",
  description: "StudioTrap IO",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <ClientWrapper session={session}>
          <Navbar />
          {children}
        </ClientWrapper>

        <link rel="icon" href="/studiotrap.ico" sizes="any" />
      </body>
    </html>
  );
}
