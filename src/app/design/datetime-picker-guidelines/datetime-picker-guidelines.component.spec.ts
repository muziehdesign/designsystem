import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimePickerGuidelinesComponent } from './datetime-picker-guidelines.component';

describe('DatetimePickerGuidelinesComponent', () => {
  let component: DatetimePickerGuidelinesComponent;
  let fixture: ComponentFixture<DatetimePickerGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimePickerGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimePickerGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
