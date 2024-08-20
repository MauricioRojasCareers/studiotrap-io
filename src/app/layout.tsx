// src/app/layout.tsx (Server Component)
import ClientWrapper from "./components/ClientWrapper";
import "./globals.css";
import StudioCard from "./components/StudioCard";

export const metadata = {
  title: "StudioTrap",
  description: "StudioTrap IO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
        <link rel="icon" href="/studiotrap.ico" sizes="any" />
      </body>
    </html>
  );
}
