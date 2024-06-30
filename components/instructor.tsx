import React from "react";
import Card from "./ui/Card";
import { Timeline, TimelineItem } from "./ui/timeline";
import { instructorData } from "@/data";

export default function InstructorCard() {
  return (
    <Card title="My Courses">
      <span className="text-secondary-foreground font-semibold">
        Trusted by over <b>10.000+</b> students
      </span>
      <Timeline>
        {instructorData.map((course, i) => (
          <TimelineItem
            key={i}
            date={course.date}
            title={course.title}
            subTitle={course.subTitle}
            link={course.link}
            tag={course.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}
