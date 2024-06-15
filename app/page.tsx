"use client";
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
import dynamic from "next/dynamic";

// This make sure the WatarWaveWrapper is only used in the client-side
const WatarWaveWrapper = dynamic(
  () => import("@/components/visual-effects/watar-wave-wrapper"),
  { ssr: false }
);

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
          <section id="landing">
            <LandingSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="internship">
            <InternshipSection />
          </section>
          <section id="featured">
            <FeaturedSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      )}
    </WatarWaveWrapper>
  );
}
