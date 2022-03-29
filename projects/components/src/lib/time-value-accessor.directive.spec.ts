import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ScheduleInputModel } from './date-time/date-time.component';
import { TimeValueAccessorDirective } from './time-value-accessor.directive';

@Component({
  template: `<input type="time" [(ngModel)]="defaultScheduleInputModel.time" (change)="changeScheduledRunTime($event)" name="defaultScheduleInputModel.name">`
})
class TestTimeInputComponent {
  defaultScheduleInputModel: ScheduleInputModel = { time: { hour: 6, minute: 20 } };
}

describe('TimeValueAccessorDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestTimeInputComponent,
        TimeValueAccessorDirective
      ],
      imports: [
        FormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should handle init and change value', fakeAsync(() => {
    let fixture = TestBed.createComponent(TestTimeInputComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;

      expect(el.value).toBe('06:20');

      el.value = '16:20';
      el.dispatchEvent(new Event('input'));

      expect(fixture.componentInstance.defaultScheduleInputModel.time).toEqual({ hour: 16, minute: 20 });
      expect(el.value).toBe('16:20');
    });
  }));
});
