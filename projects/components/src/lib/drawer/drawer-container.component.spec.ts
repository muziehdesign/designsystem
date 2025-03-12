import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerContainerComponent } from './drawer-container.component';
import { DialogConfig, DialogModule } from '@angular/cdk/dialog';
import { OverlayRef } from '@angular/cdk/overlay';
import { EMPTY } from 'rxjs';

const overlayRefStub = {
  attach: () => null,
  detach: () => null,
  dispose: () => null,
  backdropClick: () => EMPTY, 
};

describe('DrawerContainerComponent', () => {
  let component: DrawerContainerComponent;
  let fixture: ComponentFixture<DrawerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DrawerContainerComponent, 
        DialogModule
      ],
      providers: [
        { provide: DialogConfig, useValue: {} }, 
        { provide: OverlayRef, useValue: overlayRefStub } 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set open to true when _contentAttached is called', () => {
    (component as any)._contentAttached();
    expect(component.open).toBeTrue()
  });
});
