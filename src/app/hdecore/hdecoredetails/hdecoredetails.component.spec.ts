import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdecoredetailsComponent } from './hdecoredetails.component';

describe('HdecoredetailsComponent', () => {
  let component: HdecoredetailsComponent;
  let fixture: ComponentFixture<HdecoredetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdecoredetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HdecoredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
