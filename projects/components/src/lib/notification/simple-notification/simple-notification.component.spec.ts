import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzSimpleNotification } from './simple-notification.component';

describe('SimpleNotificationComponent', () => {
  let component: MzSimpleNotification;
  let fixture: ComponentFixture<MzSimpleNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzSimpleNotification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzSimpleNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
