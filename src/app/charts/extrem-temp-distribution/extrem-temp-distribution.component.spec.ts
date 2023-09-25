import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremTempDistributionComponent } from './extrem-temp-distribution.component';

describe('ExtremTempDistributionComponent', () => {
  let component: ExtremTempDistributionComponent;
  let fixture: ComponentFixture<ExtremTempDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtremTempDistributionComponent]
    });
    fixture = TestBed.createComponent(ExtremTempDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
