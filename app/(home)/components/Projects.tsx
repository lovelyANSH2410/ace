import React from "react";
import { SiChatbot, SiExpensify, SiFirebase, SiGmail, SiNetflix, SiReact, SiSwiggy, SiTailwindcss } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/direction-aware-hover";
import { BiSolidCalculator } from "react-icons/bi";

export default function Projects() {
  const projects = [
    {
      title: "Netflix GPT",
      tech: [SiReact, SiTailwindcss, SiFirebase, SiNetflix],
      link: "https://drive.google.com/drive/folders/1R_BqjaKN-09aeGVFqG3OhiPRpwMtwInp?usp=sharing",
      cover: "/Netflix.png",
      background: "bg-indigo-500",
    },
    {
      title: "Zeemail",
      tech: [SiReact, SiTailwindcss, SiFirebase, SiGmail],
      link: "http://zeemail.netlify.app",
      cover: "/Zeemail.png",
      background: "bg-green-500",
    },
    {
      title: "LoveFoods",
      tech: [SiReact, SiTailwindcss, SiSwiggy],
      link: "https://drive.google.com/drive/folders/1pVdehduISgw8T0n_MPgjyJ6eAuEBVhex?usp=sharing",
      cover: "/LoveFoods.png",
      background: "bg-green-500",
    },
    {
      title: "Spensive",
      tech: [SiReact, SiTailwindcss, SiFirebase, BiSolidCalculator],
      link: "http://spensive.netlify.app",
      background: "bg-indigo-500",
      cover: "/Spensive.png",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target="_blank">
              <div className={cn("p-4 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full cursor-pointer space-y-5"
                >
                  <div className="space-y-1">
                    <h1 className="text-3xl font-semibold">{project.title}</h1>
                    <div className="flex items-center gap-3">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="h-7 w-7" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
