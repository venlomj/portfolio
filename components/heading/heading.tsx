import { FC } from "react";
import SvgCurve from "../visual-effects/svg-curve";
import { HeadingAnimatedSvg } from "./heading-animated-svg";

interface HeadingProps {
  number: string;
  title1: string;
  title2: string;
}

const Heading: FC<HeadingProps> = ({ number, title1, title2 }) => {
  return (
    <div className="relative my-10 px-8 z-20">
      {/* Number */}
      <div
        className="outline-none flex flex-col justify-start shrink- opacity-5
    transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre"
      >
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
      </div>
      {/* Heading Text wrapper */}
      <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[15vw] lg:text-[10vw] leading-[100%] text-primary-foreground mr-3">
          {title1}
        </p>
        <HeadingAnimatedSvg text="LEARN MORE ABOUT MY FEATURED PROJECTS" />
        <p className="text-[15vw] lg:text-[10vw] leading-[100%] text-primary-foreground italic">
          {title2}
        </p>
      </div>
      {/* svg curve */}
      <SvgCurve />
    </div>
  );
};

export default Heading;
