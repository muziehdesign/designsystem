import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MuziehComponentsModule } from 'projects/components/src/public-api';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MuziehComponentsModule, FormsModule, FormComponent],
            providers: [
                NgForm,
                {
                    provide: ControlContainer,
                    useClass: NgForm,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should not respond to submit events if button is disabled', fakeAsync(() => {
        // arrange
        const getSubmitButton = () => fixture.debugElement.query(By.css('form button'));

        component.model = {
            ...component.model,
            address1: 'addr1',
            city: 'city',
            state: 'st',
            zipCode: 'zip',
        };

        fixture.detectChanges();

        // act
        expect(getSubmitButton()).not.toBeNull();
        (getSubmitButton().nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // assert
        expect((getSubmitButton().nativeElement as HTMLButtonElement).classList.contains('loading')).toBeTrue();
        expect(component.submitCount).toBe(1); // the submit event did pass through on the first request

        (getSubmitButton().nativeElement as HTMLButtonElement).click(); // attempts to trigger the submit event while processing (busy)
        fixture.detectChanges();
        expect(component.submitCount).toBe(2); // this implies that the submit event didn't pass through

        tick(1500);
        fixture.detectChanges();
        expect((getSubmitButton().nativeElement as HTMLButtonElement).classList.contains('loading')).toBeFalse(); // button is reset to default

        (getSubmitButton().nativeElement as HTMLButtonElement).click(); // trigger submit that passes through
        fixture.detectChanges();
        expect(component.submitCount).toBe(3);
        tick(1500);
    }));
});
