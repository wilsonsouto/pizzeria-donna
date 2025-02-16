import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FitMenuComponent } from '@app/core/components/menu/fit-menu/fit-menu.component';
import { SpecialMenuComponent } from '@app/core/components/menu/special-menu/special-menu.component';
import { SweetMenuComponent } from '@app/core/components/menu/sweet-menu/sweet-menu.component';
import { HeadingSectionComponent } from '@app/shared/components/heading-section/heading-section.component';
import { TextSectionComponent } from '@app/shared/components/text-section/text-section.component';
import { TraditionalMenuComponent } from '@app/core/components/menu/traditional-menu/tradional-menu.component';

@Component({
    selector: 'app-menu',
    imports: [CommonModule, NgSwitch, HeadingSectionComponent, TextSectionComponent, TraditionalMenuComponent, SpecialMenuComponent, SweetMenuComponent, FitMenuComponent],
    templateUrl: './menu.component.html'
})
export class MenuComponent {
  private readonly traditional = new TraditionalMenuComponent();

  private readonly special = new SpecialMenuComponent();

  private readonly sweet = new SweetMenuComponent();

  private readonly fit = new FitMenuComponent();

  public readonly heading: string = 'Menu';

  public readonly subheading: string =
    "A wide variety of products and ingredients, don't leave for tomorrow what you can eat today.";

  public readonly menu: string[] = ['Traditional', 'Special', 'Sweet', 'Fit'];

  public selectedMenu: string = 'Traditional';

  public handleClick(menu: string) {
    this.selectedMenu = menu;

    switch (this.selectedMenu) {
      case 'Traditional':
        this.traditional.getMenu();
        break;
      case 'Special':
        this.special.getMenu();
        break;
      case 'Sweet':
        this.sweet.getMenu();
        break;
      case 'Fit':
        this.fit.getMenu();
        break;
    }
  }
}
