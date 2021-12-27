import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGuidelinesComponent } from './modal-guidelines.component';

describe('ModalGuidelinesComponent', () => {
  let component: ModalGuidelinesComponent;
  let fixture: ComponentFixture<ModalGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
