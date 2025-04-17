import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsFilterComponent } from './options-filter.component';

describe('OptionsFilterComponent', () => {
  let component: OptionsFilterComponent;
  let fixture: ComponentFixture<OptionsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
