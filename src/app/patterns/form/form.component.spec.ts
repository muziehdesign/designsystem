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
});
