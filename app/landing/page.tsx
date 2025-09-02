"use client";
import LandingHeader from "./components/LandingHeader";
import HeroSection from "./components/HeroSection";

export default function Landing() {
  return (
    <main className="flex flex-col items-center py-8">
      <LandingHeader />
      <HeroSection />
    </main>
  );
}
