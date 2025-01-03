import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-section',
  standalone: true,
  imports: [],
  templateUrl: './heading-section.component.html',
})
export class HeadingSectionComponent {
  @Input() title: string = '';
}
