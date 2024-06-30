import { FC, useState } from "react";
import Header from "./header";
import Image from "next/legacy/image";
import picture1 from "@/public/assets/images/interbship/Qubris_logo_white.png";
import picture2 from "@/public/assets/images/interbship/applicatie.png";
import ListItem from "@/components/ui/list-item";
import Reports from "./pdf/reports";
import Presentation from "./ppt/presentations";

interface InternshipCardProps {
  id: number;
  intro: string;
  company: string;
  assignment: string;
  app: string;
  description: string;
  info: string;
}

const InternshipCard: FC<InternshipCardProps> = ({
  id,
  intro,
  company,
  assignment,
  app,
  description,
  info,
}) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleMouseEnter = (image: string) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const altText1 = "Qubris Logo";
  const altText2 = "Scanner Qubris";

  return (
    <div
      className="link w-full h-full bg-secondary-background border border-border 
    shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2"
    >
      <Header title={company} tag={assignment} />
      <div className="flex flex-col lg:flex-row">
        {/* Left column with text */}
        <div
          className="lg:w-1/2 flex flex-col justify-center gap-x-4 p-8 pl-10 text-justify mb-4"
          key={id}
        >
          <p className="text-md mt-5">{intro}</p>
          <p className="text-md mt-5">{description}</p>
          <p className="text-md mt-5">{info}</p>
        </div>
        {/* Right column with images */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          <div
            className="mb-4 flex justify-center relative"
            onMouseEnter={() => handleMouseEnter(altText1)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={picture1}
              alt={altText1}
              width={250}
              height={250}
              className="object-contain border border-[#797CBB] rounded-2xl"
            />
            {hoveredImage === altText1 && (
              <div className="absolute -top-4 right-2 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200">
                <p className="font-pixel text-[18px] whitespace-nowrap">
                  {altText1}
                </p>
              </div>
            )}
          </div>
          <div
            className="mb-4 flex justify-center relative"
            onMouseEnter={() => handleMouseEnter(altText2)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={picture2}
              alt={altText2}
              width={250}
              height={250}
              className="object-contain border border-[#797CBB] rounded-2xl"
            />
            {hoveredImage === altText2 && (
              <div className="absolute -top-4 right-2 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200">
                <p className="font-pixel text-[18px] whitespace-nowrap">
                  {altText2}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
        <div className="mb-4 w-full md:w-2/3 lg:w-1/3 md:m-auto">
          <Reports />
        </div>
        <div className="mb-4 w-full md:w-2/3 lg:w-1/3 md:m-auto">
          <Presentation />
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
// const InternshipCard: FC<InternshipCardProps> = ({
//   id,
//   intro,
//   company,
//   assignment,
//   app,
//   description,
//   info,
// }) => {
//   const [hoveredImage, setHoveredImage] = useState<boolean>(false);
//   let altText1 = "Qubris Logo";
//   let altText2 = "Scanner Qubris";

//   return (
//     <div
//       className="link w-full h-full bg-secondary-background border border-border
//     shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2"
//     >
//       <Header title={company} tag={assignment} />
//       <div className="flex flex-col lg:flex-row">
//         {/* Left column with text */}
//         <div
//           className="lg:w-1/2 flex flex-col justify-center gap-x-4 p-8"
//           key={id}
//         >
//           <p className="text-lg mt-4">{intro}</p>
//           <p className="text-lg mt-4">{description}</p>
//           <p className="text-lg mt-4">{info}</p>
//         </div>
//         {/* Right column with images */}
//         <div className="lg:w-1/2 flex flex-col justify-center items-center">
//           <div
//             className="mb-4 flex justify-center relative"
//             onMouseEnter={() => setHoveredImage(true)}
//             onMouseLeave={() => setHoveredImage(false)}
//           >
//             <Image
//               src={picture1}
//               alt={altText1}
//               width={300}
//               height={300}
//               className="object-contain border border-[#797CBB] rounded-2xl"
//             />
//             {hoveredImage ? (
//               <div className="absolute -top-6 right-2 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200">
//                 <p className="font-pixel text-[10px] whitespace-nowrap">
//                   {altText1}
//                 </p>
//               </div>
//             ) : null}
//           </div>
//           <div
//             className="mb-4 flex justify-center relative"
//             onMouseEnter={() => setHoveredImage(true)}
//             onMouseLeave={() => setHoveredImage(false)}
//           >
//             <Image
//               src={picture2}
//               alt={altText2}
//               width={300}
//               height={300}
//               className="object-contain border border-[#797CBB] rounded-2xl"
//             />
//             {hoveredImage ? (
//               <div className="absolute -top-6 right-2 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200 mt-5">
//                 <p className="font-pixel text-[10px] whitespace-nowrap">
//                   {altText2}
//                 </p>
//               </div>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InternshipCard;
