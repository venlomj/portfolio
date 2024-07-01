import { FC, useState } from "react";
import { motion } from "framer-motion";
import { slide, scale } from "./animation";
import Link from "next/link";

interface NavLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  handleClick: () => void;
}

const NavLink: FC<NavLinkProps> = ({ data, handleClick }) => {
  const { title, href, index } = data;
  const [hovered, setHovered] = useState<boolean>(false);

  // const handleClick = () => {
  //   onClick(); // Call parent's onClick to hide menu
  //   // Scroll to the section
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <motion.div
      className="relative flex items-center z-40"
      variants={slide}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        variants={scale}
        animate={hovered ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-white rounded-full absolute -left-[30px]"
      ></motion.div>
      <Link
        href={href}
        className="text-[6vw] !sm:text-[8vw] uppercase leading-[96%] font-bold text-primary-foreground"
        onClick={handleClick}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
