"use client";
import React from "react";
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import { FaHome, FaInbox, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }) {
  let location = usePathname();
  return (
    <div>
      <div className="flex">
        <div className="">
          <div className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-black">
            <div className="mb-2 flex items-center gap-4 p-4">
              <img
                src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                alt="brand"
                className="h-8 w-8"
              />
              <Typography
                variant="h5"
                className="text-white font-corinthia capitalize"
              >
                Animey Admin
              </Typography>
            </div>
            <List className="text-white">
              <Link
                href={"/"}
                className={`rounded-md ${
                  location === "/sidebar" ? "bg-blue-500" : ""
                }`}
              >
                <ListItem>
                  <ListItemPrefix>
                    <FaHome className="h-5 w-5" />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </Link>
              <ListItem>
                <ListItemPrefix>
                  <FaShoppingBag className="h-5 w-5" />
                </ListItemPrefix>
                E-Commerce
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaInbox className="h-5 w-5" />
                </ListItemPrefix>
                Inbox
                <ListItemSuffix>
                  <Chip
                    value="14"
                    size="sm"
                    className="rounded-full bg-white text-black"
                  />
                </ListItemSuffix>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="flex-1 min-h-screen">
          <div className="p-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
