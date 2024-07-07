"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/card-hover-effect";
import {
  SiCplusplus,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMaterialdesign,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text:"C++",
      Icon: SiCplusplus,
    },
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
    {
      text: "Material UI",
      Icon: SiMaterialdesign,
    },
    {
      text: "Firebase",
      Icon: SiFirebase,
    },
    {
      text: "Redux Toolkit",
      Icon: SiRedux,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🤖"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
