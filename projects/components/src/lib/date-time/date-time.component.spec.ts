import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DateTimeComponent } from './date-time.component';
import { MuziehDateTimeModule } from './date-time.module';


@Component({selector: 'test-cmp', template: ''})
class TestComponent {
  dateTime: Date | undefined;
}

function createGenericTestComponent<T>(
  html: string, type: {new (...args: any[]): T}, detectChanges = true): ComponentFixture<T> {
  TestBed.overrideComponent(type, {set: {template: html}});
  const fixture = TestBed.createComponent(type);
  if (detectChanges) {
    fixture.detectChanges();
  }
  return fixture as ComponentFixture<T>;
}

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function getInputs(el: HTMLElement) {
  return el.querySelectorAll('input');
}

function expectToDisplayDateTime(el: HTMLElement, time: string, date: string) {
  const inputs = getInputs(el);
  const dateValue: string = convertDate(inputs[0].value.toString());
  const timeValue: string = inputs[1].value.toString();

  expect(inputs.length).toEqual(2);
  expect(timeValue).toBe(time);
  expect(dateValue).toBe(date);
}

function convertDate(dateValue: string) {
  const date = new Date(dateValue);
  return `${date.getMonth()}/${date.getUTCDate()}/${date.getFullYear()}`;
}

describe('DatetimeComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimeComponent, TestComponent ],
      imports: [
        FormsModule,
        MuziehDateTimeModule,
        MatNativeDateModule
      ],
    })
    .compileComponents();
  });

  describe('rendering based on model', () => {

    it('should render hour and minute inputs', fakeAsync(() => {
      const html = `<mz-datetime [(ngModel)]="dateTime"></mz-datetime>`;

      const fixture = createTestComponent(html);
      const date = new Date('12/12/2022 16:20');
      fixture.componentInstance.dateTime = date;
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expectToDisplayDateTime(fixture.nativeElement, '16:20', '11/12/2022');
    }));

    it('should update inputs value on model change', fakeAsync(() => {
      const html = `<mz-datetime [(ngModel)]="dateTime"></mz-datetime>`;

      const fixture = createTestComponent(html);
      const date = new Date('12/12/2022 13:50');
      fixture.componentInstance.dateTime = date;
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expectToDisplayDateTime(fixture.nativeElement, '13:50', '11/12/2022');


      fixture.componentInstance.dateTime = new Date('09/11/2022 09:10');
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expectToDisplayDateTime(fixture.nativeElement, '09:10', '8/11/2022');
    }));
  });
});
