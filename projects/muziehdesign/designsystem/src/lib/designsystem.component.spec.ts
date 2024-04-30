import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsystemComponent } from './designsystem.component';

describe('DesignsystemComponent', () => {
  let component: DesignsystemComponent;
  let fixture: ComponentFixture<DesignsystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignsystemComponent]
    });
    fixture = TestBed.createComponent(DesignsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
