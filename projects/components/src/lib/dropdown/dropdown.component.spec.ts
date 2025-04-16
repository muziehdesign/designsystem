import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzDropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: MzDropdownComponent;
  let fixture: ComponentFixture<MzDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
