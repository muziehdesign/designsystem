import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzModalContent } from './modal-content.component';

describe('ModalContentComponent', () => {
  let component: MzModalContent;
  let fixture: ComponentFixture<MzModalContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzModalContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzModalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
