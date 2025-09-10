import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MzModalHeader } from './modal-header.component';
import { MzModalConfig } from '../modal.service';

@Component({
    template: `<mz-modal-header [title]="title"></mz-modal-header>`,
    standalone: true,
    imports: [MzModalHeader],
    providers: [{ provide: MzModalConfig, useValue: { disableClose: false } }],
})
class TestHostComponent {
    title = 'Test Modal Title';
}

describe('MzModalHeader', () => {
    let fixture: ComponentFixture<MzModalHeader>;
    let component: MzModalHeader;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MzModalHeader],
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
        const iconElement = hostFixture.nativeElement.querySelector('mz-svg-icon');
        expect(iconElement).toBeNull();
        const closeButton = hostFixture.nativeElement.querySelector('button');
        expect(closeButton).not.toBeNull();
    });
});
