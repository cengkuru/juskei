import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRainfallComponent } from './avg-rainfall.component';

describe('AvgRainfallComponent', () => {
  let component: AvgRainfallComponent;
  let fixture: ComponentFixture<AvgRainfallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvgRainfallComponent]
    });
    fixture = TestBed.createComponent(AvgRainfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
