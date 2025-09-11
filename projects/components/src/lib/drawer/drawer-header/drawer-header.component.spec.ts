import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzDrawerHeader } from './drawer-header.component';

describe('DrawerHeaderComponent', () => {
  let component: MzDrawerHeader;
  let fixture: ComponentFixture<MzDrawerHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzDrawerHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzDrawerHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
