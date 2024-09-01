import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { PromotionComponent } from './promotion/promotion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, ServiceComponent, PromotionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
