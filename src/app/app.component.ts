import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from "./shared/components/banner/banner.component";
import { ServicesComponent } from '@app/core/components/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BannerComponent, ServicesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
