import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MzMessageModal } from './message-modal.component';
import { DIALOG_DATA, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { MessageModalData } from './message-modal-data';

@Component({
    template: `<mz-message-modal [message]="message"></mz-message-modal>`,
    imports: [MzMessageModal],
})
class TestHostComponent {
    message = 'Test message';
}

describe('MessageModalComponent', () => {
    let component: MzMessageModal;
    let fixture: ComponentFixture<MzMessageModal>;

    beforeEach(async () => {
        const dialogRef = jasmine.createSpyObj<DialogRef>('DialogRef', ['close'], { config: { disableClose: false } } as DialogConfig );

        await TestBed.configureTestingModule({
            imports: [MzMessageModal],
            providers: [
                { provide: DIALOG_DATA, useValue: { title: 'Test title', message: 'Test message', action: 'OK' } as MessageModalData },
                { provide: DialogRef, useValue: dialogRef },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(MzMessageModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render the message input', () => {
        const hostFixture = TestBed.createComponent(TestHostComponent);
        hostFixture.detectChanges();
        const modalEl = hostFixture.nativeElement.querySelector('mz-message-modal');
        expect(modalEl.textContent).toContain('Test title');
        expect(modalEl.textContent).toContain('Test message');
        const buttonElements = modalEl.querySelectorAll('mz-modal-footer button');
        expect(buttonElements.length).toBe(1);
        expect(buttonElements[0].textContent).toBe('OK');
    });
});
