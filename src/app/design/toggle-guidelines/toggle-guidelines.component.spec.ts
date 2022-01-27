import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleGuidelinesComponent } from './toggle-guidelines.component';

describe('ToggleGuidelinesComponent', () => {
  let component: ToggleGuidelinesComponent;
  let fixture: ComponentFixture<ToggleGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
