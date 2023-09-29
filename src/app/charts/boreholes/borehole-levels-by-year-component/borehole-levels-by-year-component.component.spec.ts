import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoreholeLevelsByYearComponentComponent } from './borehole-levels-by-year-component.component';

describe('BoreholeLevelsByYearComponentComponent', () => {
  let component: BoreholeLevelsByYearComponentComponent;
  let fixture: ComponentFixture<BoreholeLevelsByYearComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoreholeLevelsByYearComponentComponent]
    });
    fixture = TestBed.createComponent(BoreholeLevelsByYearComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
