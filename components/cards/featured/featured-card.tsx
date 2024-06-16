import { FC, ReactNode, useState } from "react";
import Header from "./header";
import Video from "./video";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ logo, title, tag, video }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="link w-full h-full bg-secondary-background border border-border 
    shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Header */}
      <Header title={title} tag={tag} />
      {/* Body */}
      <div
        className="relative flex
       float-none flex-nowrap
        p-6 w-full items-center
         justify-center h-[550px]
         border border-border rounded-3xl"
      >
        {/* Video */}
        <Video video={video} active={isActive} />
      </div>
    </div>
  );
};

export default FeaturedCard;
