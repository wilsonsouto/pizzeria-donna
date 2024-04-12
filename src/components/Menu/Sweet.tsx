import React from "react";
import { PizzaFlavor, GridChild } from "../Layout";
import { MdSize } from "../Enums";

export default function Sweet() {
  return (
    <>
      <GridChild mdSize={MdSize.w6v12}>
        <PizzaFlavor
          flavor="Sweet Nutella Delight"
          ingredients="Nutella, strawberries, banana slices, and powdered sugar"
          price={11.99}
        />
        <PizzaFlavor
          flavor="Caramel Apple Bliss"
          ingredients="Caramel sauce, apple slices, cinnamon, and streusel topping"
          price={12.99}
        />
        <PizzaFlavor
          flavor="Chocolate Lover's Dream"
          ingredients="Milk chocolate, dark chocolate, white chocolate, and chocolate chips"
          price={13.99}
        />
        <PizzaFlavor
          flavor="Berry Berry Sweet"
          ingredients="Mixed berries, cream cheese, honey, and mint"
          price={12.99}
        />
      </GridChild>
      <GridChild mdSize={MdSize.w6v12}>
        <PizzaFlavor
          flavor="Peaches and Cream"
          ingredients="Sliced peaches, mascarpone cheese, honey, and almonds"
          price={11.99}
        />
        <PizzaFlavor
          flavor="Raspberry White Chocolate"
          ingredients="White chocolate sauce, raspberries, white chocolate shavings, and powdered sugar"
          price={10.99}
        />
        <PizzaFlavor
          flavor="Apple Crumble"
          ingredients="Apple slices, cinnamon, streusel topping, and vanilla ice cream"
          price={10.99}
        />
        <PizzaFlavor
          flavor="Banana Split Sensation"
          ingredients="Banana slices, chocolate sauce, strawberry sauce, chopped nuts, and whipped cream"
          price={12.99}
        />
      </GridChild>
    </>
  );
}
