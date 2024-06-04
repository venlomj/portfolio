import { stackData } from "@/data";
import Card from "../ui/Card";
import Tooltip from "../ui/tooltip";

export default function StackCard() {
  return (
    <Card title="My Stack Card" className="">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((stack, i) => (
          <div
            key={i}
            className="grid items-center gap-[90px]"
            style={{ gridTemplateColumns: "50px 1fr" }}
          >
            {/* Stack group */}
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{stack.title}</p>
            </div>
            {/* Tooltip */}
            <div className="flex gap-4">
              {stack.stack.map((st) => (
                <Tooltip
                  key={st.id}
                  title={st.title}
                  image={st.image}
                  bgColor={st.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
