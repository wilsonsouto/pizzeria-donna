import { Component } from '@angular/core';
import { HeadingSectionComponent } from '@app/shared/components/heading-section/heading-section.component';
import { TextSectionComponent } from '../../../shared/components/text-section/text-section.component';

@Component({
    selector: 'app-promotion',
    imports: [HeadingSectionComponent, TextSectionComponent],
    templateUrl: './promotion.component.html'
})
export class PromotionComponent {
  heading: string[] = ['Weekly Promotion', 'Pepperoni Classic'];
  subheading: string =
    'It is specially prepared with first-quality Pepperoni sausage filling, mozzarella cheese, tomato sauce and oregano. The delicious and soft dough and the crunchy edge complement our version of Pepperoni pizza.';
}
