"use client";
import WatarWaveWrapper from "@/components/visual-effects/watar-wave-wrapper";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";
import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import InternshipSection from "@/sections/internship";
import Navbar from "@/components/navigation/nav/Navbar";

export default function Home() {
  return (
    <WatarWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          {/* <Navbar /> */}
          <LandingSection />
          <AboutSection />
          <InternshipSection />
          <ContactSection />
        </div>
      )}
    </WatarWaveWrapper>
  );
}
