import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ServiceComponent } from './components/service/service.component';

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
