import React from "react";

interface BrandLogoProps {
  span1: string;
  span2: string;
}

export default function BrandLogo(props: BrandLogoProps) {
  return (
    <h1 className="flex gap-4 text-center font-header text-7xl tracking-wider max-sm:flex-col sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
      <span className="text-green">{props.span1}</span>
      <span className="text-white">{props.span2}</span>
    </h1>
  );
}
