import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from './svg-icon.component';
import { By } from '@angular/platform-browser';
import { SVG_ICON_DEFAULT_OPTIONS, SvgIconOptions } from './svg-icon-config';

describe('SvgIconComponent', () => {
  let component: SvgIconComponent;
  let fixture: ComponentFixture<SvgIconComponent>;
  const config = {
    svgIconDefinitionUrl: 'abc'
  } satisfies SvgIconOptions;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SvgIconComponent ],
      providers: [
        {provide: SVG_ICON_DEFAULT_OPTIONS, useValue: config}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have correct classes', () => {
    component.type = 'outline';
    component.size = 'large';
    component.key = 'x-circle';
    fixture.detectChanges();

    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg.classes['icon-outline']).toBeTrue();
    expect(svg.classes['icon-size-large']).toBeTrue();

    const use = fixture.debugElement.query(By.css('use')).nativeElement;
    expect(use.getAttribute('href')).toBe('abc#x-circle-outline');

    component.type = '';
    fixture.detectChanges();
    expect(use.getAttribute('href')).toBe('abc#x-circle');
  });
});
