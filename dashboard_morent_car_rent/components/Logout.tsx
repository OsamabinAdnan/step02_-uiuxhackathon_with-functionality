"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LogoutDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    router.push("/admin"); // Redirect to login page
  };

  return (
    <div className="relative">
      {/* Profile Image (Click to toggle dropdown) */}
      <Image
        src="/logout.jpeg" // Replace with your actual image path
        alt="Profile"
        width={70}
        height={70}
        className="cursor-pointer rounded-full border p-1 hover:opacity-80"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
          <ul className="py-2">
            <li
              onClick={handleLogout}
              className="px-4 cursor-pointer hover:bg-gray-100 text-[hsl(var(--primary))]"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
