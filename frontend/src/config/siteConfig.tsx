import { MessagesSquare, Scroll } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const basePath = process.env.BASE_PATH;

export const navbarLinks = [
  {
    href: `https://github.com/community-scripts/${basePath}`,
    event: "Github",
    icon: <FaGithub className="h-4 w-4" />,
    text: "Github",
  },
  {
    href: `https://github.com/community-scripts/${basePath}/blob/main/CHANGELOG.md`,
    event: "Change Log",
    icon: <Scroll className="h-4 w-4" />,
    text: "Change Log",
  },
  {
    href: `https://github.com/community-scripts/${basePath}/discussions`,
    event: "Discussions",
    icon: <MessagesSquare className="h-4 w-4" />,
    text: "Discussions test",
  },
];

export const mostPopularScripts = [
  "Proxmox VE Post Install",
  "Docker",
  "Home Assistant OS",
];

export const analytics = {
  url: "analytics.proxmoxve-scripts.com",
  token: "b60d3032-1a11-4244-a100-81d26c5c49a7",
};
