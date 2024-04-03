"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "/product/product-01.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "/product/product-02.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "/product/product-03.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "/product/product-04.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const reviews = { href: "#", average: 4, totalCount: 117 };

export default function Product2() {
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 ">
        <div className="">
          {/* single image */}
          <div className="">
            <img
              className="object-center object-cover w-[50%] h-[50%] mx-auto"
              src={"" + product.images[0].src}
              alt={"" + product.images[0].alt}
            />
          </div>
          {/* mulitple image */}
          <div className="flex justify-center items-center">
            <button className="w-[10%] h-[5%]">
              <img
                className=""
                src={product.images[0].src}
                alt={product.images[0].alt}
              />
            </button>
            <button className="w-[10%] h-[5%]">
              <img
                className=""
                src={product.images[1].src}
                alt={product.images[1].alt}
              />
            </button>
            <button className="w-[10%] h-[5%]">
              <img
                className=""
                src={product.images[2].src}
                alt={product.images[2].alt}
              />
            </button>
            <button className="w-[10%] h-[5%]">
              <img
                className=""
                src={product.images[3].src}
                alt={product.images[3].alt}
              />
            </button>
          </div>
        </div>
        {/* product information */}
        <div>
          <div>
            <h3>{product.name}</h3>
          </div>
          <div>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
