"use client"
import Sidebar4 from "@/components/Sidebar4";
import { Button, ButtonGroup, Card } from "@material-tailwind/react";
let colors= [
  { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
  { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
  { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
    <Sidebar4>
      <ButtonGroup >
        
        <Button></Button>
      </ButtonGroup>
    </Sidebar4>
    </>
  );
}
