import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerContainerComponent } from './drawer-container.component';
import { DialogModule } from '@angular/cdk/dialog';

describe('DrawerContainerComponent', () => {
  let component: DrawerContainerComponent;
  let fixture: ComponentFixture<DrawerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerContainerComponent, DialogModule],
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
