import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

type FlexibleButtonProps = {
  as?: "button" | "a";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const FlexibleButton: FC<FlexibleButtonProps> = ({
  as = "button",
  className,
  onClick,
  children,
}) => {
  if (as === "a") {
    return (
      <a
        href="#"
        className={cn(
          "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100",
          className
        )}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FlexibleButton;
