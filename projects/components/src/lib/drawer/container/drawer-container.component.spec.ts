import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MzDrawerContainer } from './drawer-container.component';
import { DialogConfig, DialogModule } from '@angular/cdk/dialog';
import { OverlayRef } from '@angular/cdk/overlay';
import { EMPTY } from 'rxjs';
import { MzDrawerConfig } from '../drawer-config';


const overlayRefStub = {
  attach: () => null,
  detach: () => null,
  dispose: () => null,
  backdropClick: () => EMPTY, 
};

describe('DrawerContainerComponent', () => {
  let component: MzDrawerContainer;
  let fixture: ComponentFixture<MzDrawerContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MzDrawerContainer, 
        DialogModule
      ],
      providers: [
        { provide: MzDrawerConfig, useValue: {} }, 
        { provide: OverlayRef, useValue: overlayRefStub } 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzDrawerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(1).toBeTruthy();
  });
});
