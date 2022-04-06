import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { DropdownMenuGuidelinesComponent } from './dropdown-menu-guidelines.component';

describe('DropdownMenuGuidelinesComponent', () => {
  let component: DropdownMenuGuidelinesComponent;
  let fixture: ComponentFixture<DropdownMenuGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [ DropdownMenuGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
