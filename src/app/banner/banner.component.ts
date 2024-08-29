import { Component } from '@angular/core';

interface Props {
  value1: string;
  value2: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements Props {
  value1 = 'Pizzeria';
  value2 = 'Donna';
}
