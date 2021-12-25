import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDesignComponent } from './button-design.component';

describe('ButtonDesignComponent', () => {
  let component: ButtonDesignComponent;
  let fixture: ComponentFixture<ButtonDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
