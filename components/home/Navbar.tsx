"use client";
import React from "react";
import ContentWidth from "../common/ContentWidth";
import { useTheme } from "next-themes";
import TopNav from "./TopNav";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <ContentWidth>
      <div className="w-full px-4 h-16 rounded-full border-2 border-gray-200 flex items-center justify-between">
        <div>logo</div>
        <div className="hidden lg:block"><TopNav/></div>
        <div>login and regisration button</div>
      </div>
    </ContentWidth>
  );
};

export default Navbar;
