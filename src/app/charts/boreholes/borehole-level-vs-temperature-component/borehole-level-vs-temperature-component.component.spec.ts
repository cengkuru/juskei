import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoreholeLevelVsTemperatureComponentComponent } from './borehole-level-vs-temperature-component.component';

describe('BoreholeLevelVsTemperatureComponentComponent', () => {
  let component: BoreholeLevelVsTemperatureComponentComponent;
  let fixture: ComponentFixture<BoreholeLevelVsTemperatureComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoreholeLevelVsTemperatureComponentComponent]
    });
    fixture = TestBed.createComponent(BoreholeLevelVsTemperatureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
