"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../components/mode-toggle";
import { Bell, Heart, User } from "lucide-react";
import { IoMdSettings } from "react-icons/io"; // Importing the settings icon
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Searchbar from "./Searchbar";

interface Notification {
  id: number;
  title: string;
  message: string;
}

export default function Navbar() {
  

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const notifications: Notification[] = []; // Explicitly typed notification array



  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Desktop version */}
      <header className="max-w-full w-screen mx-auto border-b shadow-sm dark:bg-primary-foreground px-16 lg:block hidden">
        <div className="flex justify-between items-center py-4 gap-2">
          {/* Logo */}
          <div>
            <h1 className="text-primary text-[32px] font-bold">
              <Link href="/">MORENT</Link>
            </h1>
          </div>
          {/* Search bar */}
          <div className="border-[1px] rounded-full flex justify-between items-center px-4">
            <Searchbar/>
          </div>
          

          {/* Right Side */}
          <div className="flex justify-between items-center gap-5">
            {/* Sign-in / Sign-up Button when signed out */}
            <SignedOut>
              <div className="w-[44px] h-[44px] rounded-full border-[2px] border-[#C3D4E9] flex justify-center items-center">
                <SignInButton>
                  <button className="text-[#596780] dark:text-primary dark:fill-current">
                    <User />
                  </button>
                </SignInButton>
              </div>
            </SignedOut>

            {/* User, Heart, Bell, and Settings icons when signed in */}
            <SignedIn>
              {/* Heart Icon */}
              <div className="w-[44px] h-[44px] rounded-full border-[2px] border-[#C3D4E9] hidden md:flex justify-center items-center">
                <Link href="/wishlist">
                  <Heart
                    width={24}
                    height={24}
                    className="text-[#596780] fill-current dark:text-primary dark:fill-current"
                  />
                </Link>
              </div>

              {/* Notification Dropdown */}
              <div
                className="w-[44px] h-[44px] rounded-full border-[2px] border-[#C3D4E9] hidden md:flex justify-center items-center relative cursor-pointer"
                onClick={toggleDropdown}
              >
                <Bell
                  width={24}
                  height={24}
                  className="text-[#596780] fill-current dark:text-primary dark:fill-current"
                />
                <span className="absolute h-[11px] w-[11px] bg-[#FF4423] rounded-full right-0 top-0"></span>
                {isDropdownOpen && (
                  <div className="absolute top-12 left-0 max-w-[200px] bg-white dark:bg-primary-foreground border rounded-md shadow-md z-10">
                    <ul className="p-2">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <li
                            key={notification.id}
                            className="text-sm text-gray-700 dark:text-gray-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                          >
                            {notification.title}: {notification.message}
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-500 dark:text-gray-400 p-2">
                          No notifications received
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Settings Icon */}
              <div className="w-[44px] h-[44px] rounded-full border-[2px] border-[#C3D4E9] hidden md:flex justify-center items-center">
                <button
                  className="text-[#596780] dark:text-primary dark:fill-current"
                  aria-label="Settings"
                >
                  <IoMdSettings width={24} height={24} />
                </button>
              </div>

              {/* User Icon (Profile) */}
              <div className="w-[44px] h-[44px] rounded-full border-[2px] border-[#C3D4E9] hidden md:flex justify-center items-center">
                <UserButton />
              </div>
            </SignedIn>
          </div>

          {/* Theme toggle button */}
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Mobile version */}
      <header className="lg:hidden block max-w-full w-screen mx-auto border-b shadow-sm dark:bg-primary-foreground py-4 px-2 space-y-4">
        <div className="flex justify-between items-center gap-2">
          {/* Main Logo */}
          <div>
            <h1 className="text-primary text-[32px] font-bold">
              <Link href="/">MORENT</Link>
            </h1>
          </div>

          {/* Login/Signup button */}
          <div className="w-[44px] h-[44px] rounded-full border-[2px] border-[#C3D4E9] flex justify-center items-center">
            <SignedOut>
              <SignInButton>
                <button className="text-[#596780] dark:text-primary dark:fill-current">
                  <User />
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2">
          {/* Search bar */}
          <div className="border-[1px] rounded-full flex justify-between items-center px-1">
            <span className="flex justify-center items-center md:w-[492px] gap-5">
              
                <Searchbar />
              
            </span>
           
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
