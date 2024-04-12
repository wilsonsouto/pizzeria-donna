import React from "react";
import { PizzaFlavor, GridChild } from "../Layout";
import { MdSize } from "../Enums";

export default function Special() {
  return (
    <>
      <GridChild mdSize={MdSize.w6v12}>
        <PizzaFlavor
          flavor="Truffle Delight"
          ingredients="Black truffle oil, wild mushrooms, arugula, and Parmesan shavings"
          price={18.99}
        />
        <PizzaFlavor
          flavor="BBQ Pulled Pork"
          ingredients="BBQ pulled pork, red onion, cilantro, and mozzarella"
          price={17.99}
        />
        <PizzaFlavor
          flavor="Mediterranean Masterpiece"
          ingredients="Grilled chicken, feta cheese, Kalamata olives, roasted red peppers, and oregano"
          price={18.99}
        />
        <PizzaFlavor
          flavor="Mediterranean Lamb"
          ingredients="Ground lamb, feta cheese, Kalamata olives, red onion, and tzatziki sauce"
          price={20.99}
        />
      </GridChild>
      <GridChild mdSize={MdSize.w6v12}>
        <PizzaFlavor
          flavor="Seafood Sensation"
          ingredients="Shrimp, scallops, calamari, mussels, garlic, and parsley"
          price={20.99}
        />
        <PizzaFlavor
          flavor="Gourmet Meat Feast"
          ingredients="Pepperoni, sausage, bacon, ham, and ground beef"
          price={19.99}
        />
        <PizzaFlavor
          flavor="Thai Chicken"
          ingredients="Thai curry sauce, chicken, bell peppers, pineapple, and cilantro"
          price={18.99}
        />
        <PizzaFlavor
          flavor="Vegetarian Deluxe"
          ingredients="Spinach, artichoke hearts, sun-dried tomatoes, roasted red peppers, and goat cheese"
          price={17.99}
        />
      </GridChild>
    </>
  );
}
