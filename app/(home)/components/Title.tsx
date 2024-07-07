import React from "react";

export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="hover:scale-105 hover:-rotate-2 transition-all duration-500 hover:text-green-400">
        <h1 className="text-3xl font-bold ">{text}</h1>
        <div className="w-40 h-2 bg-green-500 rounded-full"></div>
        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      </div>
    </div>
  );
}
