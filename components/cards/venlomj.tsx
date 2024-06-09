import Image from "next/image";
import Card from "../ui/Card";
import MyImg from "@/public/assets/images/gallery/ik.jpg";
import { cn } from "@/lib/utils";
import Tag from "../util/tag";

export default function VenlomjCard() {
  return (
    <Card className="2xl:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/* Background image */}
        <Image
          src={MyImg}
          alt="venlomj"
          className="absolute top-0 bottom-0 right-0 h-full w-full object-cover"
        />
        {/* Tag */}
        <div className="absolute top-[65%] space-y-2">
          <Tag
            text="Fawaka,"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="Ik ben Murrel Venlo"
            className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="Software Ontwikkelaar"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag text="Full Stack Ontwikkelaar" className="rounded-3xl" />
        </div>
      </div>
    </Card>
  );
}

// const Tag = ({ text, className }: { text: string; className: string }) => {
//   return (
//     <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", className)}>
//       <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
//     </div>
//   );
// };
