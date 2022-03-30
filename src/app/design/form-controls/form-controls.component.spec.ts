import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

import { FormControlsComponent } from './form-controls.component';

describe('FormControlsComponent', () => {
  let component: FormControlsComponent;
  let fixture: ComponentFixture<FormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ FormControlsComponent ],
      providers: [
        NgForm,
        {
            provide: ControlContainer,
            useClass: NgForm,
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
