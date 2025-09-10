import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzMessageModal } from './message-modal.component';

describe('GenericModalComponent', () => {
  let component: MzMessageModal;
  let fixture: ComponentFixture<MzMessageModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzMessageModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzMessageModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
