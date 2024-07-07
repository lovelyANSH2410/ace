import { MovingBorderBtn } from "@/components/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-16 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Shubham."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "I'm a Frontend Developer passionate about building modern web applications that users love."
          }
        </p>
        <Link href={"mailto:ansh.kush.2410@gmail.com"} className="inline-block">
          <Title text="Contact me 📭" />
        </Link>
      </div>
      <div className="hover:scale-105 hover:rotate-[360deg] duration-1000 relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Open to work!</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
