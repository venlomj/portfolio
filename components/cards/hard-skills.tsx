import { hardSkillsData } from "@/data";
import Card from "../ui/Card";
import Tooltip from "../ui/tooltip";

export default function HardSkills() {
  return (
    <Card title="Hard Skills" className="">
      <div className="flex flex-col gap-6 mt-2">
        {hardSkillsData.map((skills, i) => (
          <div
            key={i}
            className="grid items-center gap-[70px]"
            style={{ gridTemplateColumns: "50px 1fr" }}
          >
            {/* Stack group */}
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{skills.title}</p>
            </div>
            {/* Tooltip */}
            <div className="flex gap-4">
              {skills.stack.map((skill) => (
                <Tooltip
                  key={skill.id}
                  title={skill.title}
                  image={skill.image}
                  bgColor={skill.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
