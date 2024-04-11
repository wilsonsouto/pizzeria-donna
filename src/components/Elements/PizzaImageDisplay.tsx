import React from "react";
import Image from "next/image";

interface PizzaImageDisplayProps {
  src: string;
  alt: string;
}

export default function PizzaImageDisplay(props: PizzaImageDisplayProps) {
  return (
    <Image
      className="h-72 w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover md:h-full"
      src={props.src}
      alt={props.alt}
      width={500}
      height={500}
    />
  );
}
