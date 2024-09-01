import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BannerComponent,
    ServiceComponent,
    PromotionComponent,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
