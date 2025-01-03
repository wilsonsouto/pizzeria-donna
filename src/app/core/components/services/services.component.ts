import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingSectionComponent } from '@app/shared/components/heading-section/heading-section.component';
import { TextSectionComponent } from '@app/shared/components/text-section/text-section.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HeadingSectionComponent, TextSectionComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  heading: string[] = [
    'United just for one reason',
    "Don't be afraid, the hungry does not have to wait",
  ];
  subheading: string =
    'We are the first pizzeria to focus on this kind of service. Contributing to a better experience, security, comfort and quality. To place an order, simply use our chatbot!';
  services: string[] = [
    '✓ First quality ingredients',
    '✓ Inspired recipes',
    '✓ Love in every detail',
    '✓ Our commitment is to always be present and meet your needs',
  ];
}
