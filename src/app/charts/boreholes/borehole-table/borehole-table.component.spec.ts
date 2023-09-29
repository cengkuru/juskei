import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoreholeTableComponent } from './borehole-table.component';

describe('BoreholeTableComponent', () => {
  let component: BoreholeTableComponent;
  let fixture: ComponentFixture<BoreholeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoreholeTableComponent]
    });
    fixture = TestBed.createComponent(BoreholeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
