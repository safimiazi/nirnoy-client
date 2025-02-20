"use client";

import {
  Folder,
  Settings,
  HelpCircle,
  Menu,
  ChevronDown,
  ChevronRight,
  Briefcase,
} from "lucide-react";

import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const sidebarData = [
  {
    section: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: Home },
      { name: "Services", href: "/services", icon: Briefcase },
      {
        name: "Home Page",
        icon: Folder,
        submenu: [
          { name: "Banner", href: "/home_page/banner" },
          { name: "Project B", href: "#" },
          { name: "Project C", href: "#" },
        ],
      },
    ],
  },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  function handleNavigation() {
    setIsMobileMenuOpen(false);
  }

  function toggleSubMenu(menu: string) {
    setOpenSubMenu((prev) => (prev === menu ? null : menu));
  }
  function NavItem({
    href,
    icon: Icon,
    children,
  }: {
    href: string;
    icon: any;
    children: React.ReactNode;
  }) {
    return (
      <Link
        href={href}
        onClick={handleNavigation}
        className="flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
      >
        <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
        {children}
      </Link>
    );
  }
  function NavItemWithSubmenu({
    title,
    icon: Icon,
    submenu,
  }: {
    title: string;
    icon: any;
    submenu: { name: string; href: string }[];
  }) {
    const isOpen = openSubMenu === title;
    return (
      <div>
        <button
          onClick={() => toggleSubMenu(title)}
          className="flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
        >
          <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
          <span className="flex-1 text-left">{title}</span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isOpen && (
          <div className="ml-6 space-y-1">
            {submenu.map((item) => (
              <NavItem key={item.name} href={item.href} icon={ChevronRight}>
                {item.name}
              </NavItem>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <nav
        className={`
                fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
                lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
      >
        <div className="h-full flex flex-col">
          <Link
            href="https://kokonutui.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 px-6 flex items-center border-b border-gray-200 dark:border-[#1F1F23]"
          >
            <div className="flex items-center gap-3">
              <Image
                src="https://kokonutui.com/logo.svg"
                alt="Acme"
                width={32}
                height={32}
                className="flex-shrink-0 hidden dark:block"
              />
              <Image
                src="https://kokonutui.com/logo-black.svg"
                alt="Acme"
                width={32}
                height={32}
                className="flex-shrink-0 block dark:hidden"
              />
              <span className="text-lg font-semibold hover:cursor-pointer text-gray-900 dark:text-white">
                Nirnoy
              </span>
            </div>
          </Link>

          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">
            {sidebarData.map((section) => (
              <div key={section.section}>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {section.section}
                </div>
                <div className="space-y-1">
                  {section.items.map((item) =>
                    item.submenu ? (
                      <NavItemWithSubmenu
                        key={item.name}
                        title={item.name}
                        icon={item.icon}
                        submenu={item.submenu}
                      />
                    ) : (
                      <NavItem
                        key={item.name}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.name}
                      </NavItem>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
            <div className="space-y-1">
              <NavItem href="#" icon={Settings}>
                Settings
              </NavItem>
              <NavItem href="#" icon={HelpCircle}>
                Help
              </NavItem>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
