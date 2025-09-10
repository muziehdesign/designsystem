import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzModalFooter } from './modal-footer.component';

describe('ModalFooterComponent', () => {
  let component: MzModalFooter;
  let fixture: ComponentFixture<MzModalFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzModalFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzModalFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
