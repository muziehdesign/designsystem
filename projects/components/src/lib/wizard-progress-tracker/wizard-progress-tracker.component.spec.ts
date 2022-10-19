import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

import { WizardProgressTrackerComponent } from './wizard-progress-tracker.component';

describe('WizardProgressTrackerComponent', () => {
    let component: WizardProgressTrackerComponent;
    let fixture: ComponentFixture<WizardProgressTrackerComponent>;
    const getStepIcons = (): DebugElement[] => fixture.debugElement.queryAll(By.css('.wizard-step-icon-container'));
    const getPrevioustSteps = (): DebugElement[] => fixture.debugElement.queryAll(By.css('.wizard-step.previous'));
    const getCurrentSteps = (): DebugElement[] => fixture.debugElement.queryAll(By.css('.wizard-step.current'));
    const getNextSteps = (): DebugElement[] => fixture.debugElement.queryAll(By.css('.unvisited'));
    const getStepName = (index: number): DebugElement => fixture.debugElement.query(By.css(`.wizard-steps-container .wizard-step:nth-child(${index}) .px-5`));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, WizardProgressTrackerComponent, SvgIconComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WizardProgressTrackerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.currentStep = 0;
        component.steps = [
            { route: '/apply/step1', name: 'Step1' },
            { route: '/apply/step2', name: 'Step2' },
            { route: '/apply/step3', name: 'Step3' },
            { route: '/apply/step4', name: 'Step4' },
            { route: '/apply/step5', name: 'Step5' },
        ];
    });

    it('should display the default view with toggled flag', fakeAsync(async () => {
        // arrange & act
        fixture.detectChanges();
        await fixture.whenStable();
        component.toggled = false;

        const stepEl = fixture.debugElement.query(By.css('.wizard-progress-tracker div span'));

        // assert
        expect(component).toBeTruthy();
        expect(getStepIcons().length).toBe(5);
        expect(getPrevioustSteps().length).toBe(0);
        expect(getCurrentSteps().length).toBe(1);
        expect(getNextSteps().length).toBe(4);
        expect(component.toggled).toBeFalse();
        expect((getStepName(1)?.nativeElement as HTMLDivElement)?.textContent).toBe(' Step1 ');
        expect((getStepName(2)?.nativeElement as HTMLDivElement)?.textContent).toBe(' Step2 ');
        expect((getStepName(3)?.nativeElement as HTMLDivElement)?.textContent).toBe(' Step3 ');
        expect((getStepName(4)?.nativeElement as HTMLDivElement)?.textContent).toBe(' Step4 ');
        expect((getStepName(5)?.nativeElement as HTMLDivElement)?.textContent).toBe(' Step5 ');
        expect(stepEl).not.toBeNull();
        expect((stepEl.nativeElement as HTMLSpanElement).textContent).toBe('Step 1 of 5');
    }));

    it('should handle responsive view without toggled value', fakeAsync(async () => {
        // arrange
        component.currentStep = 3;
        component.toggled = false;

        // act
        fixture.detectChanges();
        await fixture.whenStable();

        // assert
        expect(getPrevioustSteps().length).toBe(3);
        expect(getCurrentSteps().length).toBe(1);
        expect(getNextSteps().length).toBe(1);
        expect(component.toggled).toBeFalse();
    }));

    it('should toggle', fakeAsync(async () => {
        // act
        fixture.detectChanges();
        await fixture.whenStable();

        component.toggle();

        // assert
        expect(component.toggled).toBeFalse();
    }));
});
