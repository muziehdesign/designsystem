import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMenuFooterComponent } from './filter-menu-footer.component';

describe('FilterMenuFooterComponent', () => {
  let component: FilterMenuFooterComponent;
  let fixture: ComponentFixture<FilterMenuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterMenuFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
