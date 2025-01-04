import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraditionalMenuComponent } from './tradional-menu.component';

describe('TradionalMenuComponent', () => {
  let component: TraditionalMenuComponent;
  let fixture: ComponentFixture<TraditionalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TraditionalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
