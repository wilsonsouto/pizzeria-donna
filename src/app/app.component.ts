import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '@app/core/components/menu/menu.component';
import { PromotionComponent } from '@app/core/components/promotion/promotion.component';
import { ServicesComponent } from '@app/core/components/services/services.component';
import { BannerComponent } from './shared/components/banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    ServicesComponent,
    PromotionComponent,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
