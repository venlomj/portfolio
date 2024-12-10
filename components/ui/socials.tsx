import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Button from "./Button";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaFacebook className="w-4 h-4" />,
    link: "https://www.facebook.com/profile.php?id=100003079420833",
    username: "Murrel Venlo",
  },
  {
    icon: <FaTwitter className="w-4 h-4" />,
    link: "https://twitter.com/venlomurrelpri",
    username: "Murrel Venlo",
  },
  {
    icon: <FaInstagram className="w-4 h-4" />,
    link: "https://www.instagram.com/murrel_mj/",
    username: "Murrel Venlo",
  },
  {
    icon: <FaGithub className="w-4 h-4" />,
    link: "https://github.com/venlomj",
    username: "Murrel Venlo",
  },
  {
    icon: <FaLinkedin className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/murrel-venlo-6552bb135/",
    username: "Murrel Venlo",
  },
];
