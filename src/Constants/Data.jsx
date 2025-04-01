import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/resume",
    text: "resume",
  },
];

export const social = [
  {
    id: 1,
    url: "https://leetcode.com/u/ankisood/",
    icon: <TbBrandLeetcode />,
  },

  {
    id: 3,
    url: "https://www.linkedin.com/in/ankita-sood-25aa601a8/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://github.com/As00d",
    icon: <FaGithub />,
  },
];
