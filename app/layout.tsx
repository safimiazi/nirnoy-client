import { Inter } from "next/font/google";
import "./globals.css";

import ClientLayout from "@/components/common/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nirnoy User Dashboard",
  description:
    "A modern dashboard with theme switching for the Nirnoy online admission exam system.",
  generator: "Shafi Miazi",
  keywords: [
    "Nirnoy",
    "Admission Exam",
    "Online Exam",
    "Bangladesh",
    "MCQ Test",
    "Student Portal",
  ],
  author: "Shafi Miazi",
  applicationName: "Nirnoy",
  creator: "Shafi Miazi",
  openGraph: {
    title: "Nirnoy User Dashboard",
    description:
      "A modern dashboard for Bangladeshi students to take online admission exams.",
    url: "https://nirnoy.com",
    siteName: "Nirnoy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://nirnoy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nirnoy Online Admission Exam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirnoy User Dashboard",
    description:
      "A modern dashboard for Bangladeshi students to take online admission exams.",
    creator: "@shafimiazi",
    images: ["https://nirnoy.com/twitter-image.jpg"],
  },
  robots: "index, follow",
  themeColor: "#ffffff",
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
      </body>
    </html>
  );
}
