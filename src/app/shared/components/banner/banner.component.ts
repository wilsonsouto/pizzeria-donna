import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  span1: string = 'Pizzeria';
  span2: string = 'Donna';
}
