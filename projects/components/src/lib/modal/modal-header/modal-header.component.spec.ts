import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MzModalHeader } from './modal-header.component';
import { DialogConfig, DialogRef } from '@angular/cdk/dialog';

@Component({
    template: `<mz-modal-header [title]="title"></mz-modal-header>`,
    standalone: true,
    imports: [MzModalHeader],
})
class TestHostComponent {
    title = 'Test Modal Title';
}

describe('MzModalHeader', () => {
    let fixture: ComponentFixture<MzModalHeader>;
    let component: MzModalHeader;

    beforeEach(async () => {
        const dialogRef = jasmine.createSpyObj<DialogRef>('DialogRef', ['close'], { config: { disableClose: false } } as DialogConfig);

        await TestBed.configureTestingModule({
            imports: [MzModalHeader],
            providers: [{ provide: DialogRef, useValue: dialogRef }],
        }).compileComponents();

        fixture = TestBed.createComponent(MzModalHeader);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render the title from input', async () => {
        const hostFixture = TestBed.createComponent(TestHostComponent);
        hostFixture.detectChanges();
        const headerElement = hostFixture.nativeElement.querySelector('mz-modal-header');
        expect(headerElement.textContent).toContain('Test Modal Title');
        const iconElement = hostFixture.nativeElement.querySelector('.header-icon mz-svg-icon');
        expect(iconElement).toBeNull();
        const closeButton = hostFixture.nativeElement.querySelector('button');
        expect(closeButton).not.toBeNull();
    });
});
