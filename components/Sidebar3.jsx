"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import Header from "./Header";
export default function Sidebar3({ children }) {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const location = usePathname();
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  React.useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; // Prevent body scrolling when sidebar is open
      document.addEventListener("click", closeSidebar);
    } else {
      document.body.style.overflow = ""; // Re-enable body scrolling when sidebar is closed
      document.removeEventListener("click", closeSidebar);
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on component unmount
      document.removeEventListener("click", closeSidebar);
    };
  }, [isSidebarOpen]);
  return (
    <div className="">
      <div>
        <div
          id="sidebar-multi-level-sidebar"
          className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
            isSidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
          }`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-black">
            <ul className="space-y-2 font-medium">
              <li>
                <Link className={`flex items-center p-2 text-white rounded-md hover:bg-white hover:text-black ${location === '/' ? "bg-blue-500" : ""}`} href="/">
                  <FaHome className="w-5 h-5 transition duration-75" />
                </Link>
              </li>
              <li>
                <Link className={`flex items-center p-2 text-white rounded-md hover:bg-white hover:text-black ${location === '/dashboard' ? "bg-blue-500" : ""}`} href="/dashboard">
                  <IoSpeedometer className="w-5 h-5 transition duration-75" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 min-h-screen">
          <Header toggleSidebar={toggleSidebar} />
          {children}
        </div>
      </div>
    </div>
  );
}
