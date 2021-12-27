import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTableGuidelinesComponent } from './result-table-guidelines.component';

describe('ResultTableGuidelinesComponent', () => {
  let component: ResultTableGuidelinesComponent;
  let fixture: ComponentFixture<ResultTableGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultTableGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTableGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
