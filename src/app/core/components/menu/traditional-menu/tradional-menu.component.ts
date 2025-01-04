import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Menu } from '@app/shared/interfaces/menu';
import { HeadingSectionComponent } from '@app/shared/components/heading-section/heading-section.component';
import { TextSectionComponent } from '@app/shared/components/text-section/text-section.component';

@Component({
  selector: 'app-traditional-menu',
  standalone: true,
  imports: [CommonModule, HeadingSectionComponent, TextSectionComponent],
  templateUrl: './traditional-menu.component.html',
})
export class TraditionalMenuComponent {
  public getMenu() {
    const leftContent: Menu[] = [
      {
        heading: 'Margherita',
        price: 9.99,
        ingredients: 'Tomato sauce, mozzarella cheese, fresh basil, and olive oil',
      },
      {
        heading: 'Four Cheese',
        price: 11.99,
        ingredients: 'Mozzarella, cheddar, provolone, and Parmesan cheeses with tomato sauce',
      },
      {
        heading: 'Meat Feast',
        price: 10.99,
        ingredients: 'Pepperoni, sausage, bacon, ham, tomato sauce, and mozzarella cheese',
      },
      {
        heading: 'Neapolitan',
        price: 10.99,
        ingredients: 'Tomato sauce, mozzarella cheese, basil, and olive oil',
      },
    ];

    const rightContent: Menu[] = [
      {
        heading: 'Pepperoni Classic',
        price: 6.99,
        ingredients: 'Pepperoni slices, mozzarella cheese, tomato sauce and oregano',
      },
      {
        heading: 'Classic Cheese',
        price: 9.99,
        ingredients: 'Tomato sauce, mozzarella cheese, and Parmesan cheese',
      },
      {
        heading: 'Mushroom and Olives',
        price: 10.99,
        ingredients: 'Mushrooms, black olives, tomato sauce, and mozzarella cheese',
      },
      {
        heading: 'Vegetarian',
        price: 10.99,
        ingredients: 'Bell peppers, onions, mushrooms, black olives, tomato sauce, and mozzarella cheese',
      },
    ];

    return { leftContent, rightContent };
  }
}
