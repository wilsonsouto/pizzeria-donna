import React from "react";
import { PizzaFlavor, GridChild } from "../Layout";
import { MdSize } from "../Enums";

export default function Tradicional() {
  return (
    <>
      <GridChild mdSize={MdSize.w6v12}>
        <PizzaFlavor
          flavor="Margherita"
          ingredients="Tomato sauce, mozzarella cheese, fresh basil, and olive oil"
          price={9.99}
        />
        <PizzaFlavor
          flavor="Four Cheese"
          ingredients="Mozzarella, cheddar, provolone, and Parmesan cheeses with tomato sauce"
          price={11.99}
        />
        <PizzaFlavor
          flavor="Meat Feast"
          ingredients="Pepperoni, sausage, bacon, ham, tomato sauce, and mozzarella cheese"
          price={10.99}
        />
        <PizzaFlavor
          flavor="Neapolitan"
          ingredients="Tomato sauce, mozzarella cheese, basil, and olive oil"
          price={10.99}
        />
      </GridChild>
      <GridChild mdSize={MdSize.w6v12}>
        <PizzaFlavor
          flavor="Pepperoni Classic"
          ingredients="Pepperoni slices, mozzarella cheese, tomato sauce and oregano"
          price={6.99}
        />
        <PizzaFlavor
          flavor="Classic Cheese"
          ingredients="Tomato sauce, mozzarella cheese, and Parmesan cheese"
          price={9.99}
        />
        <PizzaFlavor
          flavor="Mushroom and Olives"
          ingredients="Mushrooms, black olives, tomato sauce, and mozzarella cheese"
          price={10.99}
        />
        <PizzaFlavor
          flavor="Vegetarian"
          ingredients="Bell peppers, onions, mushrooms, black olives, tomato sauce, and mozzarella cheese"
          price={10.99}
        />
      </GridChild>
    </>
  );
}
