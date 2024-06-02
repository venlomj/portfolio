import Background from "@/components/cards/background";
import CertificationCard from "@/components/cards/certification";
import EducationCard from "@/components/cards/education";
import ExperienceCard from "@/components/cards/experience";
import InstructorCard from "@/components/cards/instructor";
import ResumeCard from "@/components/cards/resume";
import VenlomjCard from "@/components/cards/venlomj";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/Card";
import Gallery from "@/components/ui/gallery";
import React from "react";

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:p-8">
      <Heading number="02" title1="About" title2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          {/* Me Card */}
          <VenlomjCard />
          <ResumeCard />
          <Background />
          <div className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <InstructorCard />
            <CertificationCard />
          </div>
          <div className="space-y-4">
            <Card title="Stack">Stack</Card>
            <ExperienceCard />
            <EducationCard />
          </div>
          <div className="hidden 2xl:flex">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
