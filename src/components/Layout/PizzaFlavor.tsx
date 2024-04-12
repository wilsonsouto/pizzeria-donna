import React from "react";
import GridChild from "./GridChild";
import { MdSize } from "../Enums";

interface PizzaFlavorProps {
  flavor: string;
  price: number;
  ingredients: string;
}

export default function PizzaFlavor(props: PizzaFlavorProps) {
  return (
    <GridChild mdSize={MdSize.w12v12}>
      <div className="flex items-start justify-between">
        <p className="w-8/12 font-header text-3xl text-red md:text-4xl">
          {props.flavor}
        </p>
        <span className="font-paragraph text-2xl font-bold">
          $ {props.price}
        </span>
      </div>
      <p className="w-full font-paragraph text-xl italic text-black md:w-7/12 md:text-2xl">
        {props.ingredients}
      </p>
    </GridChild>
  );
}
