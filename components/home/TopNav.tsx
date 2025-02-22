import React, { useState } from "react";
import { NavigationItems } from "../common/NavigationItems";
import Link from "next/link";

const TopNav = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
      {NavigationItems.map((item, index) => (
        <li
          key={index}
          className="relative group"
          onMouseEnter={() => setOpenDropdown(index)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {/* Main Navigation Item */}
          <Link
            href={item.path}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all duration-300"
          >
            {item.name.icon}
            <span>{item.name.title}</span>
          </Link>

          {/* Dropdown Menu (if children exist) */}
          {item.children && item.children.length > 0 && (
            <ul
              className={`absolute left-0 mt-2 min-w-max bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 px-2 transition-all duration-300 transform ${
                openDropdown === index
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-95"
              }`}
            >
              <div className="grid grid-cols-2 gap-4 p-2">
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} className="group relative">
                    <Link
                      href={child.path}
                      className="flex items-center gap-3 px-3 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50x dark:hover:bg-gray-700 transition-all duration-300 rounded-md whitespace-nowrap"
                    >
                      <span className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600">
                        {child.name.icon}
                      </span>
                      <div>
                        <span className="text-md font-semibold">{child.name.title}</span>
                        {child.name.description && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {child.name.description}
                          </p>
                        )}
                      </div>
                    </Link>

                    {/* Sub-dropdown for deeper levels */}
                    {child.children && child.children.length > 0 && (
                      <ul className="absolute left-full top-0 ml-2 min-w-max bg-white dark:bg-gray-800 shadow-md rounded-md py-2 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                        {child.children.map((subChild, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subChild.path}
                              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 rounded-md whitespace-nowrap"
                            >
                              {subChild.name.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </div>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TopNav;
