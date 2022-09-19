import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdecoreComponent } from './hdecore.component';

describe('HdecoreComponent', () => {
  let component: HdecoreComponent;
  let fixture: ComponentFixture<HdecoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdecoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HdecoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
