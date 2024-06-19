import { cn } from "@/lib/utils";
import Link from "next/link";

const ButtonMailto = ({ mailto, label }: { mailto: any; label: any }) => {
  return (
    <Link
      href="#"
      className={cn(
        "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100 h-full w-max px-3 py-2"
      )}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
