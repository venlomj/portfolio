import React from "react";
import Card from "../ui/Card";
import { Timeline, TimelineItem } from "../ui/timeline";
import educationData from "@/data/education";

export default function EducationCard() {
  return (
    <Card title="Mijn studies">
      <Timeline>
        {educationData.map((edu, i) => (
          <TimelineItem
            key={i}
            date={edu.date}
            title={edu.title}
            subTitle={edu.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}
