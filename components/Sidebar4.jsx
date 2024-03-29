"use client";
import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import {
  IoChevronDownOutline,
  IoChevronForwardSharp,
  IoPower,
} from "react-icons/io5";
import { HiCog6Tooth, HiMiniPresentationChartBar } from "react-icons/hi2";
import { FaBagShopping } from "react-icons/fa6";
import { BsFillInboxFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Header from "./Header";
import Link from "next/link";

export default function Sidebar4({ children }) {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [open, setOpen] = React.useState(0);
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
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <div className="flex">
        <div
          id="sidebar-multi-level-sidebar"
          className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
            isSidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
          }`}
          aria-label="Sidebar"
        >
          <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <Typography variant="h5" color="blue-gray">
                Sidebar
              </Typography>
            </div>
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <IoChevronDownOutline
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <HiMiniPresentationChartBar className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Dashboard
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <Link href={"/dashboard"}>
                      <ListItem>
                        <ListItemPrefix>
                          <IoChevronForwardSharp
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Analytics
                      </ListItem>
                    </Link>
                    <ListItem>
                      <ListItemPrefix>
                        <IoChevronForwardSharp
                          strokeWidth={3}
                          className="h-3 w-5"
                        />
                      </ListItemPrefix>
                      Reporting
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <IoChevronForwardSharp
                          strokeWidth={3}
                          className="h-3 w-5"
                        />
                      </ListItemPrefix>
                      Projects
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={
                  <IoChevronDownOutline
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 2 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <FaBagShopping className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      E-Commerce
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <IoChevronForwardSharp
                          strokeWidth={3}
                          className="h-3 w-5"
                        />
                      </ListItemPrefix>
                      Orders
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <IoChevronForwardSharp
                          strokeWidth={3}
                          className="h-3 w-5"
                        />
                      </ListItemPrefix>
                      Products
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <ListItem>
                <ListItemPrefix>
                  <BsFillInboxFill className="h-5 w-5" />
                </ListItemPrefix>
                Inbox
                <ListItemSuffix>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaUserCircle className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <HiCog6Tooth className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <IoPower className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </Card>
        </div>
        <div className="flex-1 min-h-screen lg:pl-[18rem]">
          <Header toggleSidebar={toggleSidebar} />
          <div className="p-[10px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
