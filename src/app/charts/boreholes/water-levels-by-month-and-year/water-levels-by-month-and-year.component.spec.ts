import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterLevelsByMonthAndYearComponent } from './water-levels-by-month-and-year.component';

describe('WaterLevelsByMonthAndYearComponent', () => {
  let component: WaterLevelsByMonthAndYearComponent;
  let fixture: ComponentFixture<WaterLevelsByMonthAndYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterLevelsByMonthAndYearComponent]
    });
    fixture = TestBed.createComponent(WaterLevelsByMonthAndYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
