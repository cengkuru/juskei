import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoreholeVsRainfallComponent } from './borehole-vs-rainfall.component';

describe('BoreholeVsRainfallComponent', () => {
  let component: BoreholeVsRainfallComponent;
  let fixture: ComponentFixture<BoreholeVsRainfallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoreholeVsRainfallComponent]
    });
    fixture = TestBed.createComponent(BoreholeVsRainfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
