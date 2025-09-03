"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    // Main Class section handles of background gradient and layout
  <section className="relative w-full min-h-screen h-screen overflow-hidden flex bg-gradient-to-br from-pink-600 to-pink-400 rounded-2xl">
      {/* Left Content */}
      <div className="flex-1 z-10 flex flex-col justify-center pl-8 pr-4 py-8 md:pl-50 md:px-16 md:py-12">
        <span className="inline-block bg-white text-pink-600 px-4 py-1 rounded-full font-medium mb-4 text-sm shadow w-fit">
          ✦ creative marketplace
        </span>

        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "Instrument Sans, sans-serif" }}
        >
          find your next favorite
          <br className="hidden md:block" />
          event supplier on{" "}
          <Image
            src="/webp-assets/fetti-title.webp"
            alt="fetti"
            width={120}
            height={60}
            className="inline align-middle"
          />
        </h1>

        {/* Search bar */}
        <div className="flex items-center bg-white rounded-full px-3 py-2 w-full max-w-md mt-6 shadow">
          <Search className="text-gray-400 mr-2" />
          <Input
            className="border-none outline-none flex-1 bg-transparent text-sm"
            placeholder="search something..."
          />
          <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-4 py-2 ml-2 text-sm">
            search
          </Button>
        </div>
      </div>

      {/* Image-14 in right corner of the section */}
      <Image
        src="/webp-assets/image-14.webp"
        alt="Hero"
        width={800}
        height={600}
        className="absolute right-0 bottom-0 h-[90%] object-cover"
        style={{ mixBlendMode: "multiply" }}
      />
    </section>
  );
}
