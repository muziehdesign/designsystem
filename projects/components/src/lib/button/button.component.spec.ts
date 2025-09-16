import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzButton } from './button.component';
import { Component } from '@angular/core';

@Component({
    imports: [MzButton],
    template: `<button mz-button (click)="countClicks()" [busy]="busy">Click me!</button>`,
})
class TestHostComponent {
    counter = 0;
    busy = false;

    countClicks() {
        this.counter++;
    }
}

describe('ButtonComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const buttonElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('button[mz-button]');
        buttonElement.click();
        fixture.detectChanges();
        expect(component.counter).toBe(1);

        buttonElement.click();
        fixture.detectChanges();
        expect(component.counter).toBe(2);

        component.busy = true;
        fixture.detectChanges();
        buttonElement.click();
        fixture.detectChanges();
        expect(component.counter).toBe(2);

        component.busy = false;
        fixture.detectChanges();
        buttonElement.click();
        fixture.detectChanges();
        expect(component.counter).toBe(3);
    });
});
