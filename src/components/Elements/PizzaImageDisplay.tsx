import React from "react";
import Image from "next/image";
import { Display } from "../Enums";

interface PizzaImageDisplayProps {
  src: string;
  alt: string;
  display: Display;
}

export default function PizzaImageDisplay(props: PizzaImageDisplayProps) {
  return (
    <Image
      priority={true}
      className={`h-72 w-full rounded-sm bg-cover bg-center bg-no-repeat object-cover md:flex md:h-[500px] ${props.display}`}
      src={props.src}
      alt={props.alt}
      width={500}
      height={500}
    />
  );
}
