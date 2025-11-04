import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MzNotification } from './notification';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    template: ` <button (click)="open()">open</button> `,
    standalone: true,
})
class TestHostComponent {
    constructor(private notification: MzNotification) {}

    open() {
        this.notification.open('Test notification message');
    }
}

describe('MzNotification', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let host: TestHostComponent;
    let overlay: OverlayContainer;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        overlay = TestBed.inject(OverlayContainer);
        host = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should open notification', () => {
        const button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
        fixture.detectChanges();

        // Notification is likely rendered in an overlay, so query document
        const notification = overlay.getContainerElement().querySelector('mz-notification-container');
        expect(notification).toBeTruthy();
        expect(notification!.textContent).toContain('Test notification message');
    });
});
