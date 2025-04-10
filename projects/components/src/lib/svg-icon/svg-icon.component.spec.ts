import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from './svg-icon.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `<mz-svg-icon key="x-circle" [type]="type"></mz-svg-icon>`
})
class TestHostComponent {
  type = 'outline';
}

describe('SvgIconComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SvgIconComponent],
      declarations: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should apply host class to the component element', () => {
    const alertElement: HTMLElement = fixture.nativeElement.querySelector('mz-svg-icon');
    expect(alertElement.classList).toContain('icon');
    expect(alertElement.classList).toContain('icon-outline');
    expect(alertElement.classList).toContain('icon-medium');

    const use = fixture.debugElement.query(By.css('use')).nativeElement;
    expect(use.getAttribute('href')).toBe('./assets/icondefinitions.svg#x-circle-outline');

    fixture.componentInstance.type = 'solid';
    fixture.detectChanges();
    expect(use.getAttribute('href')).toBe('./assets/icondefinitions.svg#x-circle-solid');
  });
});