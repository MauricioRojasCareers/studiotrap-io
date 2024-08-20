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
        <ClientWrapper>
          {/* Render the StudioCard
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Featured Studios</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Example StudioCard instances */}
          {/* <StudioCard
                image="/studio1.jpg"
                title="Modern Recording Studio"
                rating="4.9"
                details="Professional studio · 2 hours minimum"
                price="$50"
              />
              <StudioCard
                image="/studio2.jpg"
                title="Cozy Home Studio"
                rating="4.7"
                details="Home studio · Flexible hours"
                price="$30"
              />  */}
          {/* </div> */}
          {/* </div> */} {/* Wrap children with a client-side wrapper */}
          {children}
        </ClientWrapper>
        <link rel="icon" href="/studiotrap.ico" sizes="any" />
      </body>
    </html>
  );
}
