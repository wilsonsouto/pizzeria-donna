import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingSectionComponent } from '@app/shared/components/heading-section/heading-section.component';
import { TextSectionComponent } from '@app/shared/components/text-section/text-section.component';
import { Menu } from '@app/shared/interfaces/menu';

@Component({
    selector: 'app-sweet-menu',
    imports: [CommonModule, HeadingSectionComponent, TextSectionComponent],
    templateUrl: './sweet-menu.component.html'
})
export class SweetMenuComponent {
  getMenu() {
    const leftContent: Menu[] = [
      {
        heading: 'Sweet Nutella Delight',
        price: 11.99,
        ingredients: 'Nutella, strawberries, banana slices, and powdered sugar',
      },
      {
        heading: 'Caramel Apple Bliss',
        price: 12.99,
        ingredients:
          'Caramel sauce, apple slices, cinnamon, and streusel topping',
      },
      {
        heading: "Chocolate Lover's Dream",
        price: 13.99,
        ingredients:
          'Milk chocolate, dark chocolate, white chocolate, and chocolate chips',
      },
      {
        heading: 'Berry Berry Sweet',
        price: 12.99,
        ingredients: 'Mixed berries, cream cheese, honey, and mint',
      },
    ];

    const rightContent: Menu[] = [
      {
        heading: 'Peaches and Cream',
        price: 11.99,
        ingredients: 'Sliced peaches, mascarpone cheese, honey, and almonds',
      },
      {
        heading: 'Raspberry White Chocolate',
        price: 10.99,
        ingredients:
          'White chocolate sauce, raspberries, white chocolate shavings, and powdered sugar',
      },
      {
        heading: 'Apple Crumble',
        price: 10.99,
        ingredients:
          'Apple slices, cinnamon, streusel topping, and vanilla ice cream',
      },
      {
        heading: 'Banana Split Sensation',
        price: 12.99,
        ingredients:
          'Banana slices, chocolate sauce, strawberry sauce, chopped nuts, and whipped cream',
      },
    ];

    return { leftContent, rightContent };
  }
}
