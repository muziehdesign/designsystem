import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerContainerComponent } from './drawer-container.component';

describe('DrawerContainerComponent', () => {
  let component: DrawerContainerComponent;
  let fixture: ComponentFixture<DrawerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
