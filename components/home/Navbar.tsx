"use client";
import React from "react";
import ContentWidth from "../common/ContentWidth";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <ContentWidth>
      <div className="w-full px-4 h-16 rounded-full border-2 border-gray-200 flex items-center justify-between">
        <div>logo</div>
        <div>nav items</div>
        <div>login and regisration button</div>
      </div>
    </ContentWidth>
  );
};

export default Navbar;
