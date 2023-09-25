import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoreholeChartComponent } from './borehole-chart.component';

describe('BoreholeChartComponent', () => {
  let component: BoreholeChartComponent;
  let fixture: ComponentFixture<BoreholeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoreholeChartComponent]
    });
    fixture = TestBed.createComponent(BoreholeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
