import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTemperatureComponent } from './average-temperature.component';

describe('AverageTemperatureComponent', () => {
  let component: AverageTemperatureComponent;
  let fixture: ComponentFixture<AverageTemperatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageTemperatureComponent]
    });
    fixture = TestBed.createComponent(AverageTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
