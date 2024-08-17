import "./globals.css";


export const metadata = {
  title: 'StudioTrap',
  description: 'StudioTrap IO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <link rel="icon" href="/studiotrap.ico" sizes="any" />
    </html>
  )
}
