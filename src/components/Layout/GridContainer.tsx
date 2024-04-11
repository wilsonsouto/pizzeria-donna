import React from "react";
import { Padding } from "../Enums";

interface GridContainerProps {
  children: React.ReactNode;
  padding: Padding;
}

export default function GridContainer(props: GridContainerProps) {
  return (
    <section
      className={`relative flex w-full flex-col gap-20 py-20 ${props.padding}`}
    >
      {props.children}
    </section>
  );
}
