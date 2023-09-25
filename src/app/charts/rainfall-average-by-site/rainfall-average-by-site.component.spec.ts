import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallAverageBySiteComponent } from './rainfall-average-by-site.component';

describe('RainfallAverageBySiteComponent', () => {
  let component: RainfallAverageBySiteComponent;
  let fixture: ComponentFixture<RainfallAverageBySiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainfallAverageBySiteComponent]
    });
    fixture = TestBed.createComponent(RainfallAverageBySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
