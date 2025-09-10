import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzModalContainer } from './modal-container.component';

describe('ModalDialogContainerComponent', () => {
  let component: MzModalContainer;
  let fixture: ComponentFixture<MzModalContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzModalContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzModalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
