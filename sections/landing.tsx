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
      {/* Show magnetic fancy-button on small screen and hide it on md screen */}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* Live clock */}
      <div className="absolute right-10 bottom-10 md:mt-6 sm:mt-6 xs:mt-6 sm:pt-4 !xs:translate-y-8 !sm:translate-y-8 !md:translate-y-8">
        <LiveClock timeZone="Europe/Brussels" />
      </div>
      {/* Slogan */}
      {/* <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw]
       lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]"
      >
        <div
          className="flex flex-col justify-center items-center text-primary-foreground text-[18vw]
        lg:text-[14vw] 2xl:text-[12rem] uppercase"
        >
          <div>
            <span>Code</span>
          </div>
          <div>
            <span>Crafting</span>
          </div>
          <div className="relative">
            <span>Brilliance</span>
            <div
              className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem]
          absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem]
          w-[30rem] uppercase font-normal"
            >
              <span>Empowering innovation</span>
              <br />
              <span>through inspired design</span>
              <br />
              <span>where challenges sparks creativity</span>
              <br />
              <span>and solution redefine possibilities</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mb-14 md:mt-20 sm:mt-20 xs:mt-20">
        <Hero />
      </div>
      {/* Magnetic scroll */}
      {/* <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] xs:bottom-[8rem] 2xl:bottom-10 !md:hidden sm:hidden xs:hidden xs:size-1">
        <ScrollDown />
      </MagneticWrapper> */}
    </div>
  );
}
