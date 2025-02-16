import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingSectionComponent } from '@app/shared/components/heading-section/heading-section.component';
import { TextSectionComponent } from '@app/shared/components/text-section/text-section.component';
import { Menu } from '@app/shared/interfaces/menu';

@Component({
    selector: 'app-special-menu',
    imports: [CommonModule, HeadingSectionComponent, TextSectionComponent],
    templateUrl: './special-menu.component.html'
})
export class SpecialMenuComponent {
  getMenu() {
    const leftContent: Menu[] = [
      {
        heading: 'Truffle Delight',
        price: 18.99,
        ingredients:
          'Black truffle oil, wild mushrooms, arugula, and Parmesan shavings',
      },
      {
        heading: 'BBQ Pulled Pork',
        price: 17.99,
        ingredients: 'BBQ pulled pork, red onion, cilantro, and mozzarella',
      },
      {
        heading: 'Mediterranean Masterpiece',
        price: 18.99,
        ingredients:
          'Grilled chicken, feta cheese, Kalamata olives, roasted red peppers, and oregano',
      },
      {
        heading: 'Mediterranean Lamb',
        price: 20.99,
        ingredients:
          'Ground lamb, feta cheese, Kalamata olives, red onion, and tzatziki sauce',
      },
    ];

    const rightContent: Menu[] = [
      {
        heading: 'Seafood Sensation',
        price: 20.99,
        ingredients: 'Shrimp, scallops, calamari, mussels, garlic, and parsley',
      },
      {
        heading: 'Gourmet Meat Feast',
        price: 19.99,
        ingredients: 'Pepperoni, sausage, bacon, ham, and ground beef',
      },
      {
        heading: 'Thai Chicken',
        price: 18.99,
        ingredients:
          'Thai curry sauce, chicken, bell peppers, pineapple, and cilantro',
      },
      {
        heading: 'Vegetarian Deluxe',
        price: 17.99,
        ingredients:
          'Spinach, artichoke hearts, sun-dried tomatoes, roasted red peppers, and goat cheese',
      },
    ];

    return { leftContent, rightContent };
  }
}
