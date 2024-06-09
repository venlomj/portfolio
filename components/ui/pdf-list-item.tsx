import { FC, ReactNode, useState } from "react";
import { AiTwotoneFilePdf, AiFillFilePdf } from "react-icons/ai";
import { FaCheck, FaCheckCircle, FaFilePdf } from "react-icons/fa";

interface PdfListItemProps {
  title: string;
  children?: ReactNode;
}

const PdfListItem: FC<PdfListItemProps> = ({ title, children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="flex items-center border border-border w-auto h-16 rounded-2xl pl-4 hover:shadow-md hover:scale-105 hover:font-bold hover:text-2xl hover:text-primary-foreground transition-transform duration-200 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <FaFilePdf className="fill-red-400 text-primary-foreground" />
      ) : (
        <AiFillFilePdf className="fill-red-500" />
      )}
      <div title={title} className="ml-2">
        {children}
      </div>
    </li>
  );
};

export default PdfListItem;
