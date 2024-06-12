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
      </div>
    </div>
  );
}
