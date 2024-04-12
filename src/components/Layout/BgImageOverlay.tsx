import React from "react";
import { JustifyContent, AlignItems } from "../Enums";

interface BgImageOverlayProps {
  children: React.ReactNode;
  justify: JustifyContent;
  align: AlignItems;
}

export default function BgImageOverlay(props: BgImageOverlayProps) {
  return (
    <div className="relative h-full w-full bg-[rgba(0,0,0,0.5)]">
      <div
        className={`flex h-full w-full flex-col px-8 py-20 ${props.justify} ${props.align}`}
      >
        {props.children}
      </div>
    </div>
  );
}
