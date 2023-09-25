import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallHighestLowestBySiteComponent } from './rainfall-highest-lowest-by-site.component';

describe('RainfallHighestLowestBySiteComponent', () => {
  let component: RainfallHighestLowestBySiteComponent;
  let fixture: ComponentFixture<RainfallHighestLowestBySiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainfallHighestLowestBySiteComponent]
    });
    fixture = TestBed.createComponent(RainfallHighestLowestBySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
