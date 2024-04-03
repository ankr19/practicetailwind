"use client";
import { RadioGroup } from "@headlessui/react";
import { Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
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
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
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

export default function Product() {
  return (
    <div className="bg-white">
      <Breadcrumbs>
        {product.breadcrumbs.map((breadcrumb, index) => (
          <a key={breadcrumb.id} href={breadcrumb?.href}>
            {breadcrumb.name}
          </a>
        ))}
        <a href={product.href}>{product.name}</a>
      </Breadcrumbs>

      <div>
        {/* image gallery */}
        <img
          width={20}
          height={20}
          src={product.images[0].src}
          alt={product.images[0].alt}
          //   className="h-full w-full object-cover object-center"
        />
        <img
          width={20}
          height={20}
          src={product.images[1].src}
          alt={product.images[1].alt}
          //   className="h-full w-full object-cover object-center"
        />
        <img
          width={20}
          height={20}
          src={product.images[2].src}
          alt={product.images[2].alt}
          //   className="h-full w-full object-cover object-center"
        />
        <img
          width={20}
          height={20}
          src={product.images[3].src}
          alt={product.images[3].alt}
          //   className="h-full w-full object-cover object-center"
        />
        {/*  */}
      </div>

      {/* Product Info Start */}
      <div>
        <h1>{product.name}</h1>

        <h2>Product information</h2>
        <p>{product.price}</p>

        <h3>Reviews</h3>
        <div>
          {[0, 1, 2, 3, 4].map((rating) => (
            <FaStar
              key={rating}
              className={classNames(
                reviews.average > rating ? "text-gray-900" : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
            />
          ))}
          <p>{reviews.average}</p>
          <a href={reviews.href} className="">
            {reviews.totalCount} reviews
          </a>
        </div>

        {/* Colors */}
        <form>
          <div>
            <h3>Color</h3>
            <RadioGroup>
              <RadioGroup.Label className="sr-only">
                Choose a color
              </RadioGroup.Label>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => (
                  <RadioGroup.Option
                    key={color.name}
                    value={color}
                    className={({ active, checked }) =>
                      classNames(
                        color.selectedClass,
                        active && checked ? "ring ring-offset-1" : "",
                        !active && checked ? "ring-2" : "",
                        "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                      )
                    }
                  >
                    <RadioGroup.Label as="span" className={"sr-only"}>
                      {color.name}
                    </RadioGroup.Label>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        color.class,
                        "h-8 w-8 rounded-full border border-black border-opacity-10"
                      )}
                    ></span>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
          <RadioGroup>
            <RadioGroup.Label className={"sr-only"}>
              Choose a size
            </RadioGroup.Label>
            {/* <div className="grid gird-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

            </div> */}
            {product.sizes.map((size) => (
              <RadioGroup.Option
                key={size.name}
                value={size}
                disabled={!size.inStock}
                className={({ active }) =>
                  classNames(
                    size.inStock
                      ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                      : "cursor-not-allowed bg-gray-50 text-gray-200",
                    active ? "ring-2 ring-indigo-500" : "",
                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                    {size.inStock ? (
                      <span
                        className={classNames(
                          active ? "border" : "border-2",
                          checked ? "border-indigo-500" : "border-transparent",
                          "pointer-events-none absolute -inset-px rounded-md"
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200 "
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </form>
      </div>
      {/* Product Info End */}
    </div>
  );
}
