import { FC, ReactNode } from "react";
import FlexibleButton from "./FlexibleButton";
import Link from "next/link";

interface DynamicButtonProps {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
  onClick?: () => void; // Add onClick prop
}

const DynamicButton: FC<DynamicButtonProps> = ({
  children,
  link,
  className,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (link) {
    return (
      <Link href={link} passHref>
        <FlexibleButton as="a" className={className}>
          {children}
        </FlexibleButton>
      </Link>
    );
  } else {
    return (
      <FlexibleButton as="button" className={className} onClick={handleClick}>
        {children}
      </FlexibleButton>
    );
  }
};

export default DynamicButton;
