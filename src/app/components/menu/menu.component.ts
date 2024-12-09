import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { Section } from '../../models/interface/section.interface';

interface Menu {
  heading: string;
  price: number;
  subtitle: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgSwitch],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements Section {
  heading: string[] = ['Menu'];
  subheading: string =
    "A wide variety of products and ingredients, don't leave for tomorrow what you can eat today.";
  menu: string[] = ['Traditional', 'Special', 'Sweet', 'Fit'];
  selectedMenu: string = 'traditional';

  handleClick(menu: string) {
    this.selectedMenu = menu;
  }

  getTraditional() {
    const leftContent: Menu[] = [
      {
        heading: 'Margherita',
        price: 9.99,
        subtitle: 'Tomato sauce, mozzarella cheese, fresh basil, and olive oil',
      },
      {
        heading: 'Four Cheese',
        price: 11.99,
        subtitle:
          'Mozzarella, cheddar, provolone, and Parmesan cheeses with tomato sauce',
      },
      {
        heading: 'Meat Feast',
        price: 10.99,
        subtitle:
          'Pepperoni, sausage, bacon, ham, tomato sauce, and mozzarella cheese',
      },
      {
        heading: 'Neapolitan',
        price: 10.99,
        subtitle: 'Tomato sauce, mozzarella cheese, basil, and olive oil',
      },
    ];

    const rightContent: Menu[] = [
      {
        heading: 'Pepperoni Classic',
        price: 6.99,
        subtitle:
          'Pepperoni slices, mozzarella cheese, tomato sauce and oregano',
      },
      {
        heading: 'Classic Cheese',
        price: 9.99,
        subtitle: 'Tomato sauce, mozzarella cheese, and Parmesan cheese',
      },
      {
        heading: 'Mushroom and Olives',
        price: 10.99,
        subtitle:
          'Mushrooms, black olives, tomato sauce, and mozzarella cheese',
      },
      {
        heading: 'Vegetarian',
        price: 10.99,
        subtitle:
          'Bell peppers, onions, mushrooms, black olives, tomato sauce, and mozzarella cheese',
      },
    ];

    return { leftContent, rightContent };
  }

  getSpecial() {
    const leftContent: Menu[] = [
      {
        heading: 'Truffle Delight',
        price: 18.99,
        subtitle:
          'Black truffle oil, wild mushrooms, arugula, and Parmesan shavings',
      },
      {
        heading: 'BBQ Pulled Pork',
        price: 17.99,
        subtitle: 'BBQ pulled pork, red onion, cilantro, and mozzarella',
      },
      {
        heading: 'Mediterranean Masterpiece',
        price: 18.99,
        subtitle:
          'Grilled chicken, feta cheese, Kalamata olives, roasted red peppers, and oregano',
      },
      {
        heading: 'Mediterranean Lamb',
        price: 20.99,
        subtitle:
          'Ground lamb, feta cheese, Kalamata olives, red onion, and tzatziki sauce',
      },
    ];

    const rightContent: Menu[] = [
      {
        heading: 'Seafood Sensation',
        price: 20.99,
        subtitle: 'Shrimp, scallops, calamari, mussels, garlic, and parsley',
      },
      {
        heading: 'Gourmet Meat Feast',
        price: 19.99,
        subtitle: 'Pepperoni, sausage, bacon, ham, and ground beef',
      },
      {
        heading: 'Thai Chicken',
        price: 18.99,
        subtitle:
          'Thai curry sauce, chicken, bell peppers, pineapple, and cilantro',
      },
      {
        heading: 'Vegetarian Deluxe',
        price: 17.99,
        subtitle:
          'Spinach, artichoke hearts, sun-dried tomatoes, roasted red peppers, and goat cheese',
      },
    ];

    return { leftContent, rightContent };
  }

  getSweet() {
    const leftContent: Menu[] = [
      {
        heading: 'Sweet Nutella Delight',
        price: 11.99,
        subtitle: 'Nutella, strawberries, banana slices, and powdered sugar',
      },
      {
        heading: 'Caramel Apple Bliss',
        price: 12.99,
        subtitle: 'Caramel sauce, apple slices, cinnamon, and streusel topping',
      },
      {
        heading: "Chocolate Lover's Dream",
        price: 13.99,
        subtitle:
          'Milk chocolate, dark chocolate, white chocolate, and chocolate chips',
      },
      {
        heading: 'Berry Berry Sweet',
        price: 12.99,
        subtitle: 'Mixed berries, cream cheese, honey, and mint',
      },
    ];

    const rightContent: Menu[] = [
      {
        heading: 'Peaches and Cream',
        price: 11.99,
        subtitle: 'Sliced peaches, mascarpone cheese, honey, and almonds',
      },
      {
        heading: 'Raspberry White Chocolate',
        price: 10.99,
        subtitle:
          'White chocolate sauce, raspberries, white chocolate shavings, and powdered sugar',
      },
      {
        heading: 'Apple Crumble',
        price: 10.99,
        subtitle:
          'Apple slices, cinnamon, streusel topping, and vanilla ice cream',
      },
      {
        heading: 'Banana Split Sensation',
        price: 12.99,
        subtitle:
          'Banana slices, chocolate sauce, strawberry sauce, chopped nuts, and whipped cream',
      },
    ];

    return { leftContent, rightContent };
  }

  getFit() {
    const leftContent: Menu[] = [
      {
        heading: 'Supreme',
        price: 13.99,
        subtitle:
          'Shredded chicken, turkey bacon, eggs, spinach, cherry tomatoes, and black olives',
      },
      {
        heading: 'Veggie Delight',
        price: 12.99,
        subtitle:
          'Zucchini, bell peppers, mushrooms, red onion, artichoke hearts, and tomatoes',
      },
      {
        heading: 'Hawaiian',
        price: 12.99,
        subtitle:
          'Grilled chicken, turkey bacon, pineapple, red onion, barbecue sauce, and cilantro',
      },
      {
        heading: 'Spinach and Ricotta',
        price: 13.99,
        subtitle:
          'Spinach, ricotta cheese, cherry tomatoes, red onion, tomato sauce',
      },
    ];

    const rightContent: Menu[] = [
      {
        heading: 'Quinoa Power',
        price: 12.99,
        subtitle:
          'Quinoa, spinach, cherry tomatoes, feta cheese, and balsamic glaze',
      },
      {
        heading: 'Turkey Avocado',
        price: 13.99,
        subtitle:
          'Turkey slices, avocado, mixed greens, cherry tomatoes, and honey mustard dressing',
      },
      {
        heading: 'Mediterranean',
        price: 14.99,
        subtitle:
          'Grilled chicken, feta cheese, Kalamata olives, red onion, roasted red peppers, and oregano',
      },
      {
        heading: 'Spicy Chicken',
        price: 13.99,
        subtitle:
          'Spicy grilled chicken, jalapeños, red onion, bell peppers, mozzarella, and marinara sauce',
      },
    ];

    return { leftContent, rightContent };
  }
}
