import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { MzDrawer } from './drawer';
import { MzDrawerModule } from './drawer.module';
import { MzDrawerRef } from './drawer-ref';

@Component({
    imports: [MzDrawerModule],
    template: `
        <mz-drawer-header title="Example drawer"></mz-drawer-header>
        <mz-drawer-content>
            <p>This is an example drawer</p>
        </mz-drawer-content>
        <mz-drawer-footer>
            <button mz-button (click)="close()">Close</button>
        </mz-drawer-footer>
    `,
})
class ExampleDrawerComponent {
    constructor(private drawerRef: MzDrawerRef<any>) {}
    protected close() {
        this.drawerRef.close();
    }
}

@Component({
    template: `<button (click)="openDrawer()">Open drawer</button>`,
})
class TestHostComponent {
    constructor(private drawer: MzDrawer) {}

    openDrawer() {
        this.drawer.open(ExampleDrawerComponent);
    }
}

describe('MzDrawer', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let drawer: MzDrawer;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestHostComponent]
        });
        fixture = TestBed.createComponent(TestHostComponent);
        drawer = TestBed.inject(MzDrawer);
    });

    it('should open and close drawer', () => {
        spyOn(drawer, 'open').and.callThrough();
        fixture.componentInstance.openDrawer();
        fixture.detectChanges();

        // Query for drawer header, content, and footer elements
        let header = document.querySelector('mz-drawer-header');
        let content = document.querySelector('mz-drawer-content');
        let footer = document.querySelector('mz-drawer-footer');
        let closeButton = footer?.querySelector('button');

        expect(header).toBeTruthy();
        expect(header?.textContent).toContain('Example drawer');
        expect(content).toBeTruthy();
        expect(content?.textContent).toContain('This is an example drawer');
        expect(footer).toBeTruthy();
        expect(closeButton).toBeTruthy();
        expect(closeButton?.textContent?.toLowerCase()).toContain('close');

        // Simulate clicking the close button
        closeButton?.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        // After closing, elements should not be present
        header = document.querySelector('mz-drawer-header');
        content = document.querySelector('mz-drawer-content');
        footer = document.querySelector('mz-drawer-footer');

        expect(header).toBeNull();
        expect(content).toBeNull();
        expect(footer).toBeNull();
    });
});
