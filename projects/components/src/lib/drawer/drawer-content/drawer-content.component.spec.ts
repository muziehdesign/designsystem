import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzDrawerContent } from './drawer-content.component';

describe('DrawerContentComponent', () => {
  let component: MzDrawerContent;
  let fixture: ComponentFixture<MzDrawerContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzDrawerContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzDrawerContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
