import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/shubham-kushwaha-510aaa120/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/lovelyANSH2410",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/shubham-kushwaha-510aaa120/",
      label: "LinkedIn",
      icon: SiX,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Shubham 👨‍💻
      </h1>

      <div className="flex items-center gap-5">
        {" "}
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} aria-label={social.label} key={index} target="_blank">
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
