import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzDrawerFooter } from './drawer-footer.component';

describe('DrawerFooterComponent', () => {
  let component: MzDrawerFooter;
  let fixture: ComponentFixture<MzDrawerFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzDrawerFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzDrawerFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
