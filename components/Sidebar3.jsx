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
          className={`fixed top-0 left-0 z-40 h-screen w-[100px] transition-transform ${
            isSidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
          }`}
          aria-label="Sidebar"
        >
          <div></div>
          <div className="h-full  overflow-y-auto bg-black pr-3">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  className={`flex items-center px-[10px] mt-3 text-white rounded-r-md hover:bg-white hover:text-black ${
                    location === "/" ? "bg-blue-500" : ""
                  }`}
                  href="/"
                >
                  <FaHome className="w-5 h-5 transition duration-75" />
                </Link>
              </li>
              <li className="">
                <Link
                  className={`flex gap-3 items-center p-2 text-white rounded-r-md hover:bg-white hover:text-black ${
                    location === "/dashboard" ? "bg-blue-500" : ""
                  }`}
                  href="/dashboard"
                >
                  <IoSpeedometer className="w-5 h-5 transition duration-75" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 min-h-screen">
          <Header toggleSidebar={toggleSidebar} />
          <div className="lg:ml-[62px] p-[10px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
