import { FC, ReactNode, useState } from "react";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftpowerpoint } from "react-icons/si";

interface PPTListItemProps {
  title: string;
  children?: ReactNode;
}

const PPTListItem: FC<PPTListItemProps> = ({ title, children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="flex items-center border border-border w-auto h-16 rounded-2xl pl-4 hover:shadow-md hover:scale-105 hover:font-bold hover:text-2xl hover:text-primary-foreground transition-transform duration-200 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <PiMicrosoftPowerpointLogo className="fill-orange-700 text-primary-foreground" />
      ) : (
        <SiMicrosoftpowerpoint className="fill-orange-500" />
      )}
      <div title={title} className="ml-2">
        {children}
      </div>
    </li>
  );
};

export default PPTListItem;
