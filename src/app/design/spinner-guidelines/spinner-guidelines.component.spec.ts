import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerGuidelinesComponent } from './spinner-guidelines.component';

describe('SpinnerGuidelinesComponent', () => {
  let component: SpinnerGuidelinesComponent;
  let fixture: ComponentFixture<SpinnerGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
