import React from "react";
import Card from "../ui/Card";
import { Timeline, TimelineItem } from "../ui/timeline";
import { instructorData, softSkills } from "@/data";
import { FaCheckCircle } from "react-icons/fa";
import ListItem from "../ui/list-item";

export default function SoftSkills() {
  return (
    <Card title="Soft Skills">
      <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-secondary-foreground">
        {softSkills.map((soft) => (
          <ListItem key={soft.id} title={soft.title} />
        ))}
      </ul>
    </Card>
  );
}
