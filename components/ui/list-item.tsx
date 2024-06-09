import { FC, useState } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

interface ListItemProps {
  title: string;
}

const ListItem: FC<ListItemProps> = ({ title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="flex items-center border border-border w-auto h-16 rounded-2xl pl-4 hover:shadow-md hover:scale-110 hover:font-bold hover:text-2xl hover:text-primary-foreground transition-transform duration-200 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <FaCheckCircle className="fill-green-400" />
      ) : (
        <FaCheck className="fill-green-400" />
      )}
      <div title={title} className="ml-2">
        {title}
      </div>
    </li>
  );
};

export default ListItem;
