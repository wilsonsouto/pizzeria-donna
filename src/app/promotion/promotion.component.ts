import { Component } from '@angular/core';

interface Props {
  heading: string[];
  subheading: string;
}

@Component({
  selector: 'app-promotion',
  standalone: true,
  imports: [],
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.scss',
})
export class PromotionComponent implements Props {
  heading: string[] = ['Weekly Promotion', 'Pepperoni Classic'];
  subheading: string =
    'It is specially prepared with first-quality Pepperoni sausage filling, mozzarella cheese, tomato sauce and oregano. The delicious and soft dough and the crunchy edge complement our version of Pepperoni pizza.';
}
