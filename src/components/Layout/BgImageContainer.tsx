import React from "react";
interface BgImageContainerProps {
  url: string;
  children: React.ReactNode;
}

export default function BgImageContainer(props: BgImageContainerProps) {
  return (
    <div
      className="h-[860px] w-full bg-cover bg-center bg-no-repeat object-cover"
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      {props.children}
    </div>
  );
}
