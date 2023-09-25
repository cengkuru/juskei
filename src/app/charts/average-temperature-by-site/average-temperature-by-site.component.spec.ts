import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTemperatureBySiteComponent } from './average-temperature-by-site.component';

describe('AverageTemperatureBySiteComponent', () => {
  let component: AverageTemperatureBySiteComponent;
  let fixture: ComponentFixture<AverageTemperatureBySiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageTemperatureBySiteComponent]
    });
    fixture = TestBed.createComponent(AverageTemperatureBySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
