import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderGuidelinesComponent } from './page-header-guidelines.component';

describe('PageHeaderGuidelinesComponent', () => {
  let component: PageHeaderGuidelinesComponent;
  let fixture: ComponentFixture<PageHeaderGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHeaderGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
