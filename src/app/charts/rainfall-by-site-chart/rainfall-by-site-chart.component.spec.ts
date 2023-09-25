import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallBySiteChartComponent } from './rainfall-by-site-chart.component';

describe('RainfallBySiteChartComponent', () => {
  let component: RainfallBySiteChartComponent;
  let fixture: ComponentFixture<RainfallBySiteChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainfallBySiteChartComponent]
    });
    fixture = TestBed.createComponent(RainfallBySiteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
