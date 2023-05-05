import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AlertComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return icon and class', () => {
        component.type = 'info';
        const infoIcon = component.getAlertIcon();
        const infoClass = component.getAlertClass();

        component.type = 'warning';
        const waringIcon = component.getAlertIcon();
        const warningClass = component.getAlertClass();

        component.type = 'error';
        const errorIcon = component.getAlertIcon();
        const errorClass = component.getAlertClass();

        component.type = 'success';
        const successIcon = component.getAlertIcon();
        const successClass = component.getAlertClass();

        // success
        expect(successClass).toBe('alert-success');
        expect(successIcon).toBe('check-circle');

        // warning
        expect(warningClass).toBe('alert-warning');
        expect(waringIcon).toBe('exclamation');

        // info
        expect(infoClass).toBe('alert-info');
        expect(infoIcon).toBe('information-circle');

        // error
        expect(errorIcon).toBe('x-circle');
        expect(errorClass).toBe('alert-error');

        expect(component).toBeTruthy();
    });
});
