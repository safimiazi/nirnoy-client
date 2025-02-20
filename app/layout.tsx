import { Inter } from "next/font/google";
import "./globals.css";

import ClientLayout from "@/components/common/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nirnoy User Dashboard",
  description: "A modern dashboard with theme switching",
  generator: "shafi miazi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>{" "}
        {/* Use ClientLayout to handle client-side logic */}
      </body>
    </html>
  );
}
