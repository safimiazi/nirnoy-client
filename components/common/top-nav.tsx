"use client";

import Image from "next/image";
import { Bell, ChevronRight } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full">
      <div className="font-medium text-sm hidden sm:flex items-center space-x-1 truncate max-w-[300px]">
        {paths.map((path, index) => (
          <div key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 mx-1" />
            <div className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors capitalize">
              {path}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
        <button
          type="button"
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
        >
          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
        </button>

        <ThemeToggle />
      </div>
    </nav>
  );
}
