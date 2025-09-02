"use client";
import { Button } from "@/components/ui/button";

export default function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f7f5f8] border-b border-gray-100 flex items-center justify-center">
      <div className="w-full max-w-7xl flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <img src="/fetti-logo.svg" alt="Fetti Logo" className="h-10 w-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="px-4 py-2 text-sm" onClick={() => window.location.href = "/login"}>login</Button>
          <Button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 text-sm" onClick={() => window.location.href = "/sign-up"}>sign up →</Button>
        </div>
      </div>
    </header>
  );
}
