import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureHighLowChartComponent } from './temperature-high-low-chart.component';

describe('TemperatureHighLowChartComponent', () => {
  let component: TemperatureHighLowChartComponent;
  let fixture: ComponentFixture<TemperatureHighLowChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureHighLowChartComponent]
    });
    fixture = TestBed.createComponent(TemperatureHighLowChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
