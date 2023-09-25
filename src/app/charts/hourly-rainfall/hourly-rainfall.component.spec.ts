import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyRainfallComponent } from './hourly-rainfall.component';

describe('HourlyRainfallComponent', () => {
  let component: HourlyRainfallComponent;
  let fixture: ComponentFixture<HourlyRainfallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyRainfallComponent]
    });
    fixture = TestBed.createComponent(HourlyRainfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
