import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetMenuComponent } from './sweet-menu.component';

describe('SweetMenuComponent', () => {
  let component: SweetMenuComponent;
  let fixture: ComponentFixture<SweetMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
