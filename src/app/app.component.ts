import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from "./shared/components/banner/banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
