import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemberByIdComponent } from './view-member-by-id.component';

describe('ViewMemberByIdComponent', () => {
  let component: ViewMemberByIdComponent;
  let fixture: ComponentFixture<ViewMemberByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMemberByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
