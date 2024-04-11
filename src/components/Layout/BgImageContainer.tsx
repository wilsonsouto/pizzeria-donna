import React from "react";

interface BgImageContainerProps {
  children: React.ReactNode;
  url: string;
}

export default function BgImageContainer(props: BgImageContainerProps) {
  return (
    <div
      className="h-[860px] w-full bg-cover bg-center bg-no-repeat object-cover"
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <div className="relative h-full w-full bg-[rgba(0,0,0,0.7)]">
        <div
          className={`flex h-full w-full flex-col items-center justify-center px-8 py-20 text-center`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
