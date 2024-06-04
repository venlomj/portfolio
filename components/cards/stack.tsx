import { stackData } from "@/data";
import Card from "../ui/Card";

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
          </div>
        ))}
      </div>
    </Card>
  );
}
