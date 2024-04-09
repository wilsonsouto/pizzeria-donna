import React from "react";

interface BackgroundContainerProps {
  children: React.ReactNode;
  url: string;
}

export default function BackgroundContainer(props: BackgroundContainerProps) {
  return (
    <div
      className="h-[700px] w-full bg-cover bg-center bg-no-repeat object-cover"
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <div className="relative h-full w-full bg-[rgba(0,0,0,0.7)]">
        <div
          className={`flex h-full w-full flex-col items-center justify-center text-center`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
