import Background from "@/components/cards/background";
import CertificationCard from "@/components/cards/certification";
import EducationCard from "@/components/cards/education";
import ExperienceCard from "@/components/cards/experience";
import InstructorCard from "@/components/cards/instructor";
import ResumeCard from "@/components/cards/resume";
import HardSkills from "@/components/cards/hard-skills";
import VenlomjCard from "@/components/cards/venlomj";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/Card";
import Gallery from "@/components/ui/gallery";
import Hobby from "@/components/ui/hobby";
import React from "react";
import SoftSkills from "@/components/cards/soft-skills";
import { FiArrowUpRight } from "react-icons/fi";

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:p-8">
      <Heading number="01" title1="Over" title2="Mij" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          {/* Me Card */}
          <VenlomjCard />
          <ResumeCard />
          <Background />
          <div className="2xl:hidden">
            <Hobby />
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <SoftSkills />
            <EducationCard />
          </div>
          <div className="space-y-4">
            <HardSkills />
            {/* <ExperienceCard /> */}
            <CertificationCard />
          </div>
          <div className="hidden 2xl:flex">
            <Hobby />
          </div>
        </div>
        {/* Fancy link */}
        {/* <div className="mt-12 text-center">
          <a
            href="https://venlomj.sinners.be/"
            target="_blank"
            className="inline-block mt-8 text-primary-foreground transition-colors duration-300 hover:text-accent hover:bg-secondary-background focus:text-accent focus:bg-secondary-background rounded-full py-1 px-4"
          >
            Wil je meer weten over mij, klik hier{" "}
            <FiArrowUpRight className="inline-block ml-1" size={18} />
          </a>
        </div> */}
      </div>
    </div>
  );
}
