"use client";
import LandingHeader from "./components/LandingHeader";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import { CreativitySection } from "./components/CreativitySection";

export default function Landing() {
  return (
    <main className="flex flex-col items-center py-8">
      <LandingHeader />
      <HeroSection />
      <FeatureSection />
      <CreativitySection/>
    </main>
  );
}
