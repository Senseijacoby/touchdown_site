"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinks } from "@/utils/constants";
import { Menu as MenuIcon, X as ExitIcon } from "lucide-react";
import MenuCover from "./MenuCover";
import { Logo } from "./Logo";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto  top-0 left-0 right-0 z-10  bg-opacity-3/4 bg-slate-900 opacity-100">
      <div className="container flex flex-wrap items-center justify-between px-4 py-2 mx-auto lg:py-4">
        <Logo />
        <div className="block mobile-menu md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <MenuIcon className="w-5 h-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <ExitIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuCover links={navLinks} /> : null}
    </nav>
  );
}
