import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MzAlert } from './alert.component';
import { AlertAppearance } from './alert-appearance';
import { By } from '@angular/platform-browser';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
    template: `<mz-alert [appearance]="appearance()" [title]="title()">This is my alert body.</mz-alert>`,
    imports: [MzAlert],
})
class AlertTestHostComponent {
    appearance = signal<AlertAppearance>('info');
    title = signal<string>('My alert title');
}

describe('MzAlert', () => {
    let component: AlertTestHostComponent;
    let fixture: ComponentFixture<AlertTestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AlertTestHostComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertTestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render with default appearance', () => {
        const titleEl = fixture.debugElement.nativeElement.querySelector('.alert-title');
        expect(titleEl.textContent).toContain('My alert title');

        const bodyEl = fixture.debugElement.nativeElement.querySelector('.alert-body');
        expect(bodyEl.textContent).toContain('This is my alert body.');

        const containerEl = fixture.debugElement.nativeElement.querySelector('.alert');
        expect(containerEl.className).toContain('alert-info');

        const icon = fixture.debugElement.query(By.directive(SvgIconComponent));
        expect(icon.componentInstance.key).toBe('information-circle-solid');
    });

    it('should render success appearance', () => {
        component.appearance.set('success');
        fixture.detectChanges();
        const containerEl = fixture.debugElement.nativeElement.querySelector('.alert');
        expect(containerEl.className).toContain('alert-success');
        const icon = fixture.debugElement.query(By.directive(SvgIconComponent));
        expect(icon.componentInstance.key).toBe('check-circle-solid');
    });

    it('should render warning appearance', () => {
        component.appearance.set('warning');
        fixture.detectChanges();
        const containerEl = fixture.debugElement.nativeElement.querySelector('.alert');
        expect(containerEl.className).toContain('alert-warning');
        const icon = fixture.debugElement.query(By.directive(SvgIconComponent));
        expect(icon.componentInstance.key).toBe('exclamation-triangle-solid');
    });

    it('should render danger appearance', () => {
        component.appearance.set('danger');
        fixture.detectChanges();
        const containerEl = fixture.debugElement.nativeElement.querySelector('.alert');
        expect(containerEl.className).toContain('alert-danger');
        const icon = fixture.debugElement.query(By.directive(SvgIconComponent));
        expect(icon.componentInstance.key).toBe('x-circle-solid');
    });
});
