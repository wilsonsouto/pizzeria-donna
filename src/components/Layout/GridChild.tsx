import React from "react";
import { MdTextPosition, MdSize } from "../Enums";

interface GridChildProps {
  children: React.ReactNode;
  position?: MdTextPosition;
  mdSize: MdSize;
}

export default function GridChild(props: GridChildProps) {
  return (
    <div
      className={`flex flex-col gap-4 text-center w-full ${props.position} ${props.mdSize}`}
    >
      {props.children}
    </div>
  );
}
