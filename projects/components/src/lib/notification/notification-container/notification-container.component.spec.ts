import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzNotificationContainer } from './notification-container.component';

describe('NotificationContainerComponent', () => {
  let component: MzNotificationContainer;
  let fixture: ComponentFixture<MzNotificationContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzNotificationContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzNotificationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
