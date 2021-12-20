import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGuidelinesComponent } from './code-guidelines.component';

describe('CodeGuidelinesComponent', () => {
  let component: CodeGuidelinesComponent;
  let fixture: ComponentFixture<CodeGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
