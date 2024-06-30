import { FC } from "react";
import Image from "next/legacy/image";

interface HeroButtonProps {
  type: "button" | "submit";
  title: string;
  icon: string;
  variant: string;
}

const HeroButton: FC<HeroButtonProps> = ({ type, title, icon, variant }) => {
  return (
    <button
      className={`flexCenter gap-2 roun rounded-full border ${variant}`}
      type={type}
    >
      <label className="font-[500] whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
    </button>
  );
};

export default HeroButton;
