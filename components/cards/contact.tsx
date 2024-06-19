import { FC, ReactNode } from "react";
import Button from "../ui/Button";
import ButtonMailto from "../ui/ButtonMailto";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  title: string;
  icon: ReactNode;
  text: string;
  btnText: string;
  onButtonClick: () => void;
  mailto?: string;
  tel?: string;
}
const ContactCard: FC<ContactCardProps> = ({
  title,
  icon,
  text,
  btnText,
  onButtonClick,
  mailto,
  tel,
}) => {
  return (
    <div
      className="bg-secondary-background border border-border rounded-lg
     relative overflow-hidden py-5 pl-[25px] shadow-md"
    >
      <div className="z-20 flex flex-col gap-8 justify-between items-start">
        {/* Header */}
        <div className="flex items-center gap-x-2">
          <span className="bg-white w-8 h-8 rounded-lg grid place-items-center">
            {icon}
          </span>
          <h1>{title}</h1>
        </div>
        {/* Body text */}
        <div>
          <h2 className="font-bold text-2xl">{text}</h2>
        </div>
        {mailto ? (
          <ButtonMailto mailto={mailto} label={btnText} />
        ) : (
          <button
            onClick={onButtonClick}
            className={cn(
              "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100 h-full w-max px-3 py-2 contact-button"
            )}
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
