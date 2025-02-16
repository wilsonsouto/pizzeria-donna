import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingSectionComponent } from '@app/shared/components/heading-section/heading-section.component';
import { TextSectionComponent } from '@app/shared/components/text-section/text-section.component';
import { Menu } from '@app/shared/interfaces/menu';

@Component({
    selector: 'app-fit-menu',
    imports: [CommonModule, HeadingSectionComponent, TextSectionComponent],
    templateUrl: './fit-menu.component.html'
})
export class FitMenuComponent {
  getMenu() {
    const leftContent: Menu[] = [
      {
        heading: 'Supreme',
        price: 13.99,
        ingredients:
          'Shredded chicken, turkey bacon, eggs, spinach, cherry tomatoes, and black olives',
      },
      {
        heading: 'Veggie Delight',
        price: 12.99,
        ingredients:
          'Zucchini, bell peppers, mushrooms, red onion, artichoke hearts, and tomatoes',
      },
      {
        heading: 'Hawaiian',
        price: 12.99,
        ingredients:
          'Grilled chicken, turkey bacon, pineapple, red onion, barbecue sauce, and cilantro',
      },
      {
        heading: 'Spinach and Ricotta',
        price: 13.99,
        ingredients:
          'Spinach, ricotta cheese, cherry tomatoes, red onion, tomato sauce',
      },
    ];

    const rightContent: Menu[] = [
      {
        heading: 'Quinoa Power',
        price: 12.99,
        ingredients:
          'Quinoa, spinach, cherry tomatoes, feta cheese, and balsamic glaze',
      },
      {
        heading: 'Turkey Avocado',
        price: 13.99,
        ingredients:
          'Turkey slices, avocado, mixed greens, cherry tomatoes, and honey mustard dressing',
      },
      {
        heading: 'Mediterranean',
        price: 14.99,
        ingredients:
          'Grilled chicken, feta cheese, Kalamata olives, red onion, roasted red peppers, and oregano',
      },
      {
        heading: 'Spicy Chicken',
        price: 13.99,
        ingredients:
          'Spicy grilled chicken, jalapeños, red onion, bell peppers, mozzarella, and marinara sauce',
      },
    ];

    return { leftContent, rightContent };
  }
}
