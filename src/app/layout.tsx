import "./globals.css";
import { League_Spartan } from 'next/font/google';

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spartan.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}