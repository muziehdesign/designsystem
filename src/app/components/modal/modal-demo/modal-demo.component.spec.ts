import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalDemoComponent } from './modal-demo.component';

describe('ModalDemoComponent', () => {
    let component: ModalDemoComponent;
    let fixture: ComponentFixture<ModalDemoComponent>;

    beforeEach(async () => {
        const mockDialogRef = {
            close: jasmine.createSpy('close'),
            open: jasmine.createSpy('open'),
            afterOpened: jasmine.createSpy('afterOpened'),
            afterClosed: jasmine.createSpy('afterClosed'),
        };

        await TestBed.configureTestingModule({
            imports: [ModalDemoComponent, MatDialogModule],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {},
                },
                { provide: MatDialogRef, useValue: mockDialogRef },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should close dialog and open window', () => {
      const dialogRef = TestBed.inject(MatDialogRef);
      expect(window).toBeTruthy();
      expect(dialogRef).toBeTruthy();
      spyOn(window, 'open');
      component.openLink();
      expect(dialogRef.close).toHaveBeenCalled();
  });
});
