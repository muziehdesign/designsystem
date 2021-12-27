import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProgressBarComponent } from './page-progress-bar.component';

describe('PageProgressBarComponent', () => {
  let component: PageProgressBarComponent;
  let fixture: ComponentFixture<PageProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
