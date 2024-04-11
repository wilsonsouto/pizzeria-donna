import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
}

export default function GridContainer(props: GridContainerProps) {
  return (
    <section className="relative flex w-full flex-col gap-20 px-8 py-20">
      {props.children}
    </section>
  );
}
