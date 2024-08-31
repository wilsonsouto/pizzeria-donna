import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, ServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
