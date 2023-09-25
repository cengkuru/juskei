import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CummulativeRainfallComponent } from './cummulative-rainfall.component';

describe('CummulativeRainfallComponent', () => {
  let component: CummulativeRainfallComponent;
  let fixture: ComponentFixture<CummulativeRainfallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CummulativeRainfallComponent]
    });
    fixture = TestBed.createComponent(CummulativeRainfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
