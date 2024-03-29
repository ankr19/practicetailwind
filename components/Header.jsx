"use client"
import { usePathname } from "next/navigation";
import React from "react";
import { BiMenu } from "react-icons/bi";
export default function Header({ toggleSidebar }) {
  const [head, setHeader] = React.useState("")
  let location = usePathname();
  React.useEffect(()=>{
    setHeader(location.replace("/",""))
  },[])
  return (
    <div className="flex justify-between items-center bg-black px-3 py-2">
      <div className="flex justify-start items-center">
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          onClick={toggleSidebar}
          className="text-white rounded-md border-[1px] py-1 px-2 items-center border-white sm:hidden mr-[5px]"
        >
          <BiMenu className="w-6 h-6" />
        </button>
        <div className="text-white capitalize">
          {head==="" ? "Home" : head}
        </div>
      </div>
    </div>
  );
}
