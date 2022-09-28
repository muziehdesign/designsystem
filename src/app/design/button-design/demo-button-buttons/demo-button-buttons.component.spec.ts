import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoButtonButtonsComponent } from './demo-button-buttons.component';

describe('DemoButtonButtonsComponent', () => {
  let component: DemoButtonButtonsComponent;
  let fixture: ComponentFixture<DemoButtonButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoButtonButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoButtonButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
