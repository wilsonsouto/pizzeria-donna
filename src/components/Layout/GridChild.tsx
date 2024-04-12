import React from "react";
import { MdSize, TextPosition, MdTextPosition } from "../Enums";

interface GridChildProps {
  children: React.ReactNode;
  mdSize: MdSize;
  mdPosition?: MdTextPosition;
  position?: TextPosition;
}

export default function GridChild(props: GridChildProps) {
  return (
    <div
      className={`flex w-full flex-col gap-4 ${props.mdSize} ${props.mdPosition} ${props.position}  `}
    >
      {props.children}
    </div>
  );
}
