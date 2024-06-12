import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Curve from "./curve";
import Profile from "@/components/ui/Profile";
import NavLink from "./nav-link";
import Link from "next/link";
import MenuCard from "./menu-card";

const navItems = [
  { title: "HOME", href: "/" },
  { title: "OVER MIJ", href: "#about" },
  { title: "STAGE", href: "#internship" },
  { title: "PROJECTEN", href: "#featured" },
  { title: "CONTACT", href: "#contact" },
];

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      <div className="relative w-full pl-[5%]">
        {/* Profile */}
        <div className="absolute top-8">
          <Profile />
        </div>
      </div>
      {/* Menu and Card */}
      <div className="absolute bottom-32 w-full lg:px-[5%]">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "1fr 500px" }}
        >
          <div className="pl-4 flex flex-col justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
          {/* Menu about card */}
          <MenuCard />
        </div>
      </div>
      {/* Footer Links */}
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white">
          {/* Left side */}
          {/* <div className="flex items-center gap-4">
            <Link href="/">LEGAL NOTICE</Link>
            <Link href="/">404</Link>
            <Link href="/">LEGALSTYLE</Link>
          </div> */}
          {/* Middle side */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/murrel-venlo-6552bb135/"
              target="_blank"
            >
              LINKEDIN
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100003079420833"
              target="_blank"
            >
              FACEBOOK
            </Link>
            <Link href="https://www.instagram.com/murrel_mj/" target="_blank">
              INSTAGRAM
            </Link>
            <Link href="https://twitter.com/venlomurrelpri" target="_blank">
              TWITTER
            </Link>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link href="https://github.com/murrelvenlo" target="_blank">
              © 2024
            </Link>
          </div>
        </div>
      </div>
      {/* Curve */}
      <Curve />
    </motion.div>
  );
}
