import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MzModalModule } from './modal.module';
import { MzModal } from './modal';

@Component({
    template: ` <button (click)="openModal()">Open modal</button> `,
    imports: [],
})
class TestHostComponent {
    constructor(private modal: MzModal) {}

    openModal() {
        this.modal.open(ModalExampleComponent);
    }
}

@Component({
    template: `
        <mz-modal-header title="Modal test"></mz-modal-header>
        <mz-modal-body>Test Modal Body</mz-modal-body>
        <mz-modal-footer>
            <button>Close</button>
        </mz-modal-footer>
    `,
    imports: [MzModalModule],
})
class ModalExampleComponent {}

describe('Modal', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let modal: MzModal;
    let overlay: OverlayContainer;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestHostComponent],
        });
        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
        modal = TestBed.inject(MzModal);
        overlay = TestBed.inject(OverlayContainer);
    });

    it('should open modal and display header, body, and footer', () => {
        spyOn(modal, 'open').and.callThrough();
        const button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
        fixture.detectChanges();

        expect(modal.open).toHaveBeenCalled();
        const header = overlay.getContainerElement().querySelector('mz-modal-header');
        const body = overlay.getContainerElement().querySelector('mz-modal-body');
        const footer = overlay.getContainerElement().querySelector('mz-modal-footer');

        expect(header).toBeTruthy();
        expect(header?.textContent).toBe('Modal test');
        expect(body).toBeTruthy();
        expect(body?.textContent).toBe('Test Modal Body');
        expect(footer).toBeTruthy();
        expect(footer?.textContent).toBe('Close');
    });
});
