import Hero from "@/components/hero";
import Header from "@/components/navigation/header/header";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LandingSection() {
  return (
    <div
      className="relative
      h-screen overflow-hidden p-8"
    >
      {/* Header */}
      <Header />
      {/* Live clock */}
      <div className="absolute right-10 bottom-10 md:mt-6 sm:mt-6 xs:mt-6 sm:pt-4 !xs:translate-y-8 !sm:translate-y-8 !md:translate-y-8">
        <LiveClock timeZone="Europe/Brussels" />
      </div>
      {/* Slogan */}
      <div className="mb-14 md:mt-20 sm:mt-20 xs:mt-20">
        <Hero />
      </div>
    </div>
  );
}
