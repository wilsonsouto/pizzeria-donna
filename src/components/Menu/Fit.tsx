import React from "react";
import { PizzaFlavor, GridChild } from "../Layout";
import { MdSize } from "../Enums";

export default function Fit() {
  return (
    <>
      <GridChild mdSize={MdSize.w6v12}>
        <PizzaFlavor
          flavor="Supreme"
          ingredients="Shredded chicken, turkey bacon, eggs, spinach, cherry tomatoes, and black olives"
          price={13.99}
        />
        <PizzaFlavor
          flavor="Veggie Delight"
          ingredients="Zucchini, bell peppers, mushrooms, red onion, artichoke hearts, and tomatoes"
          price={12.99}
        />
        <PizzaFlavor
          flavor="Hawaiian"
          ingredients="Grilled chicken, turkey bacon, pineapple, red onion, barbecue sauce, and cilantro"
          price={12.99}
        />
        <PizzaFlavor
          flavor="Spinach and Ricotta"
          ingredients="Spinach, ricotta cheese, cherry tomatoes, red onion, tomato sauce"
          price={13.99}
        />
      </GridChild>
      <GridChild mdSize={MdSize.w6v12}>
        <PizzaFlavor
          flavor="Quinoa Power"
          ingredients="Quinoa, spinach, cherry tomatoes, feta cheese, and balsamic glaze"
          price={12.99}
        />
        <PizzaFlavor
          flavor="Turkey Avocado"
          ingredients="Turkey slices, avocado, mixed greens, cherry tomatoes, and honey mustard dressing"
          price={13.99}
        />
        <PizzaFlavor
          flavor="Mediterranean"
          ingredients="Grilled chicken, feta cheese, Kalamata olives, red onion, roasted red peppers, and oregano"
          price={14.99}
        />
        <PizzaFlavor
          flavor="Spicy Chicken"
          ingredients="Spicy grilled chicken, jalapeños, red onion, bell peppers, mozzarella, and marinara sauce"
          price={13.99}
        />
      </GridChild>
    </>
  );
}
