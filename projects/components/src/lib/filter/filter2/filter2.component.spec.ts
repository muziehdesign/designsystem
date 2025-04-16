import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filter2Component } from './filter2.component';

describe('Filter2Component', () => {
  let component: Filter2Component;
  let fixture: ComponentFixture<Filter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filter2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
