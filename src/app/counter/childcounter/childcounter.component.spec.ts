import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcounterComponent } from './childcounter.component';

describe('ChildcounterComponent', () => {
  let component: ChildcounterComponent;
  let fixture: ComponentFixture<ChildcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
