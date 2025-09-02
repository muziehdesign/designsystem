import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { MzSpinner, SpinnerAppearance, SpinnerSize } from './spinner.component';

@Component({
  template: `
    <mz-spinner></mz-spinner>
    <mz-spinner [size]="size()" [appearance]="appearance()"></mz-spinner>
  `,
  standalone: true,
  imports: [MzSpinner]
})
class SpinnerTestHostComponent {
  size = signal<SpinnerSize | undefined>(undefined);
  appearance = signal<SpinnerAppearance | undefined>(undefined);
}

describe('MzSpinner', () => {
  let hostFixture: ComponentFixture<SpinnerTestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerTestHostComponent]
    }).compileComponents();
    hostFixture = TestBed.createComponent(SpinnerTestHostComponent);
    hostFixture.detectChanges();
  });

  it('should render spinner', () => {
    const spinner = hostFixture.nativeElement.querySelector('mz-spinner');
    expect(spinner.className).toContain('medium');
    expect(spinner.className).toContain('primary');
  });

  it('should update spinner class', () => {
    const hostComponent = hostFixture.componentInstance;
    hostComponent.size.set('large');
    hostComponent.appearance.set('secondary');
    hostFixture.detectChanges();
    const spinner = hostFixture.nativeElement.querySelectorAll('mz-spinner')[1];
    expect(spinner.className).toContain('large');
    expect(spinner.className).toContain('secondary');

    hostComponent.size.set('medium');
    hostComponent.appearance.set('primary');
    hostFixture.detectChanges();
    expect(spinner.className).toContain('medium');
    expect(spinner.className).toContain('primary');
  });
});