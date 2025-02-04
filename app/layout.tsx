import type { Metadata } from "next";
import "./globals.css";
import TanstackProvider from "@/components/TanstackProvider";

export const metadata: Metadata = {
  title: "Salesway",
  description: "Front-end application integrating authenticated REST APIs and SQL database tables. It features a custom login system, dynamic UI components, and smooth interactions. Data is fetched from both APIs and a database to ensure a seamless user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='antialiased'>
          <TanstackProvider>
            {children}
          </TanstackProvider>
      </body>
    </html>
  );
}
