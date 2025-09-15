import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MzMessageDialog } from './message-dialog.component';
import { DIALOG_DATA, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { MessageDialogData } from './message-dialog-data';

@Component({
    template: `<mz-message-dialog [message]="message"></mz-message-dialog>`,
    imports: [MzMessageDialog],
})
class TestHostComponent {
    message = 'Test message';
}

describe('MessageModalComponent', () => {
    let component: MzMessageDialog;
    let fixture: ComponentFixture<MzMessageDialog>;

    beforeEach(async () => {
        const dialogRef = jasmine.createSpyObj<DialogRef>('DialogRef', ['close'], { config: { disableClose: false } } as DialogConfig );

        await TestBed.configureTestingModule({
            imports: [MzMessageDialog],
            providers: [
                { provide: DIALOG_DATA, useValue: { title: 'Test title', message: 'Test message', action: 'OK', cancelAction: '' } as MessageDialogData },
                { provide: DialogRef, useValue: dialogRef },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(MzMessageDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render the message input', () => {
        const hostFixture = TestBed.createComponent(TestHostComponent);
        hostFixture.detectChanges();
        const modalEl = hostFixture.nativeElement.querySelector('mz-message-dialog');
        expect(modalEl.textContent).toContain('Test title');
        expect(modalEl.textContent).toContain('Test message');
        const buttonElements = modalEl.querySelectorAll('mz-dialog-footer button');
        expect(buttonElements.length).toBe(1);
        expect(buttonElements[0].textContent).toBe('OK');
    });
});
