import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationGuidelinesComponent } from './pagination-guidelines.component';

describe('PaginationGuidelinesComponent', () => {
  let component: PaginationGuidelinesComponent;
  let fixture: ComponentFixture<PaginationGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
