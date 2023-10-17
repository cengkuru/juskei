import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWaterLevelsComponent } from './weather-water-levels.component';

describe('WeatherWaterLevelsComponent', () => {
  let component: WeatherWaterLevelsComponent;
  let fixture: ComponentFixture<WeatherWaterLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherWaterLevelsComponent]
    });
    fixture = TestBed.createComponent(WeatherWaterLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
