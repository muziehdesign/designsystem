import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MzDialogModule } from './dialog.module';
import { MzDialog } from './dialog';

@Component({
    template: ` <button (click)="openModal()">Open modal</button> `,
    imports: [],
})
class TestHostComponent {
    constructor(private modal: MzDialog) {}

    openModal() {
        this.modal.open(DialogExampleComponent);
    }
}

@Component({
    template: `
        <mz-dialog-header title="Modal test"></mz-dialog-header>
        <mz-dialog-body>Test Modal Body</mz-dialog-body>
        <mz-dialog-footer>
            <button>Close</button>
        </mz-dialog-footer>
    `,
    imports: [MzDialogModule],
})
class DialogExampleComponent {}

describe('Modal', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let modal: MzDialog;
    let overlay: OverlayContainer;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestHostComponent],
        });
        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
        modal = TestBed.inject(MzDialog);
        overlay = TestBed.inject(OverlayContainer);
    });

    it('should open modal and display header, body, and footer', () => {
        spyOn(modal, 'open').and.callThrough();
        const button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
        fixture.detectChanges();

        expect(modal.open).toHaveBeenCalled();
        const header = overlay.getContainerElement().querySelector('mz-dialog-header');
        const body = overlay.getContainerElement().querySelector('mz-dialog-body');
        const footer = overlay.getContainerElement().querySelector('mz-dialog-footer');

        expect(header).toBeTruthy();
        expect(header?.textContent).toBe('Modal test');
        expect(body).toBeTruthy();
        expect(body?.textContent).toBe('Test Modal Body');
        expect(footer).toBeTruthy();
        expect(footer?.textContent).toBe('Close');
    });
});
