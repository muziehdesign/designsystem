import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzModal } from './modal.component';

describe('ModalLayoutComponent', () => {
  let component: MzModal;
  let fixture: ComponentFixture<MzModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
