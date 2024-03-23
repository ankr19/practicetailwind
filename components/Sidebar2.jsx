"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaDashcube, FaHome, FaTable } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
export default function Sidebar2({ children }) {
  let location = usePathname();
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
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
  console.log(location);
  return (
    <div className="container">
        <div className="">
          <button
            data-drawer-target="sidebar-multi-level-sidebar"
            data-drawer-toggle="sidebar-multi-level-sidebar"
            aria-controls="sidebar-multi-level-sidebar"
            type="button"
            onClick={toggleSidebar}
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-black dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <LuMenuSquare size={20}/>
          </button>
        </div>
      <div className="flex">
        <div
          id="sidebar-multi-level-sidebar"
          className={`flex-none min-w-[25px] bg-black left-0 z-40 top-0 h-screen transition-transform ${
            isSidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
          }`}
          aria-label="Sidebar"
        >
          <div className="flex flex-col flex-nowrap items-center overflow-y-auto">
            <a href="" className="block"></a>
            <ul className="flex flex-col flex-wrap sm:flex-nowrap mb-auto text-center items-center space-y-2">
              <li className="flex items-center p-2">
                <Link
                  href="/"
                  className={`text-white py-3 px-4 rounded-md ${
                    location === "/" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaHome size={20} />
                </Link>
              </li>
              <li className="flex items-center p-2">
                <Link
                  href="/dashboard"
                  className={`text-white py-3 px-4 rounded-md ${
                    location === "/dashboard" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaTable size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-3 min-h-screen">{children}</div>
      </div>
    </div>
  );
}
