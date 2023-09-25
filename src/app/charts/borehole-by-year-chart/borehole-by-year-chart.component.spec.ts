import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoreholeByYearChartComponent } from './borehole-by-year-chart.component';

describe('BoreholeByYearChartComponent', () => {
  let component: BoreholeByYearChartComponent;
  let fixture: ComponentFixture<BoreholeByYearChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoreholeByYearChartComponent]
    });
    fixture = TestBed.createComponent(BoreholeByYearChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
