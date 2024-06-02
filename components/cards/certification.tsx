import React from "react";
import Card from "../ui/Card";
import { Timeline, TimelineItem } from "../ui/timeline";
import certificationData from "@/data/certification";

export default function CertificationCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {certificationData.map((cert, i) => (
          <TimelineItem
            key={i}
            date={cert.date}
            title={cert.title}
            subTitle={cert.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}
