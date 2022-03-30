import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { ModalGuidelinesComponent } from './modal-guidelines.component';

describe('ModalGuidelinesComponent', () => {
  let component: ModalGuidelinesComponent;
  let fixture: ComponentFixture<ModalGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGuidelinesComponent ],
      providers: [
        {
          provide: MatDialog,
          useValue: {
              open: jasmine.createSpy('MatDialogOpenSpy').and.returnValue({
                  afterClosed: jasmine.createSpy('MatDialogRefAfterClosedSpy').and.returnValue(of({})),
              }),
          },
      },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
