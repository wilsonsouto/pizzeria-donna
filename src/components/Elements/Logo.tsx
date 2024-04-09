import React from "react";

interface LogoProps {
  span1: string;
  span2: string;
}

export default function Logo(props: LogoProps) {
  return (
    <h1 className="flex gap-4 text-6xl tracking-wider max-sm:flex-col sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
      <span>{props.span1}</span>
      <span>{props.span2}</span>
    </h1>
  );
}
