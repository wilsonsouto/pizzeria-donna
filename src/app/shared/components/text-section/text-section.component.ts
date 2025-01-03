import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-section.component.html',
})
export class TextSectionComponent {
  @Input() isListItem: boolean = true;
  @Input() title: string = '';
}
