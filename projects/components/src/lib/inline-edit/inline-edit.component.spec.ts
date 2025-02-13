import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInlineEditComponent } from './inline-edit.component';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('InlineEditComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MzInlineEditComponent, TestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display', () => {
        expect(component).toBeTruthy();

        const wrapper = fixture.debugElement.query(By.css('.mz-inline-edit')).nativeElement;
        expect(wrapper.textContent).toContain('initialValue');

        const inputDebugElement = fixture.debugElement.query(By.css('input'));
        expect(inputDebugElement).toBeNull();

        const submitDebugElement = fixture.debugElement.query(By.css('button[type="submit"]'));
        expect(submitDebugElement).toBeNull();
    });

    it('should activate', () => {
        const button = fixture.debugElement.query(By.css('button'));
        expect(button.nativeElement.textContent).toContain('initialValue');

        button.triggerEventHandler('click');
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css('input'));
        expect(input.nativeElement.value).toBe('my model value');

        const submitDebugElement = fixture.debugElement.query(By.css('button[type="submit"]'));
        expect(submitDebugElement).not.toBeNull();
    });

    it('should save changes', () => {
        const button = fixture.debugElement.query(By.css('button'));
        button.triggerEventHandler('click');
        fixture.detectChanges();

        spyOn(component, 'onSave').and.callThrough();
        const input = fixture.debugElement.query(By.css('input'));
        input.nativeElement.value = 'new value';
        input.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        const submit = fixture.debugElement.query(By.css('button[type="submit"]'));
        submit.triggerEventHandler('click');
        fixture.detectChanges();
        expect(component.onSave).toHaveBeenCalled();
        expect(component.model).toEqual('new value');
    });

    it('should cancel and revert changes', () => {
        const button = fixture.debugElement.query(By.css('button'));
        button.triggerEventHandler('click');
        fixture.detectChanges();
        spyOn(component, 'onSave').and.callThrough();
        const input = fixture.debugElement.query(By.css('input'));
        input.nativeElement.value = 'new value';
        input.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        const cancel = fixture.debugElement.query(By.css('.button-tertiary'));
        cancel.triggerEventHandler('click');
        fixture.detectChanges();

        expect(component.onSave).not.toHaveBeenCalled();
        expect(component.model).toEqual('my model value');
        expect(button.nativeElement.textContent.trim()).toEqual('initialValue');
    });
});

@Component({
    selector: 'app-inline-edit-test',
    standalone: true,
    template: `
        <mz-inline-edit (save)="onSave()" [label]="display()">
            <input type="text" [(ngModel)]="model" name="model" />
        </mz-inline-edit>
    `,
    imports: [MzInlineEditComponent, FormsModule],
})
class TestComponent {
    model = 'my model value';
    display = signal('initialValue');

    onSave() {
        //
    }
}