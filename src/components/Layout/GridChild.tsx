import React from "react";
import { MdTextPosition } from "../Enums";

interface GridChildProps {
  children: React.ReactNode;
  position: MdTextPosition;
}

export default function GridChild(props: GridChildProps) {
  return (
    <div className={`flex flex-col gap-4 text-center ${props.position}`}>
      {props.children}
    </div>
  );
}
