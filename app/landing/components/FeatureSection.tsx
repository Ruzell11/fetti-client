"use client";

import { useState } from "react";
import Image from "next/image";

// Static data (this is the data in the button, further styling can be applied importantly is the assets)
const categories = [
  { name: "baking", icon: "/webp-assets/baking-ico.webp" },
  { name: "media", icon: "/webp-assets/media-ico.webp" },
  { name: "rentals", icon: "/webp-assets/rentals-ico.webp" },
  { name: "flowers", icon: "/webp-assets/flowers-ico.webp" },
  { name: "favors", icon: "/webp-assets/favors-ico.webp" },
  { name: "make up", icon: "/webp-assets/makeup-ico.webp" },
  { name: "guest activity", icon: "/webp-assets/guest-activity-ico.webp" },
  { name: "snack bar", icon: "/webp-assets/snack-bar-ico.webp" },
  { name: "gifts", icon: "/webp-assets/gift-ico.webp" },
  { name: "more", icon: "/webp-assets/more-ico.webp" },
];

// Static data (should be connected to a database of supplier information)
const suppliers = [
  {
    name: "josephine salinas",
    category: "cake",
    rating: 4.7,
    location: "cavite, philippines",
  },
  {
    name: "samantha grace",
    category: "baking",
    rating: 4.7,
    location: "cavite, philippines",
  },
  {
    name: "angeline bakery",
    category: "cake",
    rating: 4.7,
    location: "cavite, philippines",
  },
];

export default function FeatureSection() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="w-full py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        uncovering hidden <span className="text-pink-500">gems</span> in
      </h2>
      <div
        className="grid grid-cols-5 grid-rows-2 gap-x-12 gap-y-8 mb-8 w-full max-w-6xl mx-auto items-start"
        style={{ minHeight: 2 * 74.5 + 32 }}
      >
        {categories.map((cat, idx) => (
          <button
            key={cat.name}
            className={`w-full h-[74.5px] self-start rounded-[15px] flex items-center justify-center gap-3 border transition-colors duration-150 font-medium text-base focus:outline-none ${
              selected === idx
                ? "border-pink-500 bg-pink-50 text-pink-600 shadow-pink-100 shadow"
                : "border-gray-200 bg-white text-black"
            }`}
            onClick={() => setSelected(idx)}
          >
            <Image
              src={cat.icon}
              alt={`${cat.name} icon`}
              width={40}
              height={40}
              className="rounded-full"
            />
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suppliers.map((sup) => (
          <div
            key={sup.name}
            className="bg-white rounded-xl shadow flex flex-col relative p-0 overflow-visible"
            style={{ minHeight: 260 }}
          >
            {/* Background image placeholder */}
            <div className="w-full h-[149px] rounded-t-xl bg-gray-100 relative flex items-end">
              {/* Horizontal line behind profile */}
              <div
                className="absolute left-[88px] bottom-0 z-0"
                style={{ width: 151, height: 1, background: '#E5E7EB' }}
              />
              {/* Profile placeholder - larger and left aligned */}
              <div
                className="absolute left-6 bottom-[-48px] w-[96px] h-[96px] rounded-full bg-gray-200 flex items-center justify-center border-4 border-white text-gray-500 text-base font-semibold z-10"
              >
                Picture
              </div>
            </div>
            {/* Supplier info */}
            <div className="pt-10 pb-4 px-4 flex flex-col">
              <div className="flex justify-end mb-2">
                <span className="text-xs px-3 py-1 rounded-full bg-pink-50 text-pink-500 font-semibold border border-pink-200">
                  {sup.category}
                </span>
              </div>
              <div className="font-semibold text-lg mb-1">{sup.name}</div>
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <span className="mr-1">★</span>
                <span className="font-medium text-gray-700 mr-2">
                  {sup.rating}
                </span>
                <span>{sup.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
