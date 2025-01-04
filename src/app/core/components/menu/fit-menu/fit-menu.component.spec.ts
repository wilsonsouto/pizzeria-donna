import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitMenuComponent } from './fit-menu.component';

describe('FitMenuComponent', () => {
  let component: FitMenuComponent;
  let fixture: ComponentFixture<FitMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
