import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChild1Component } from './tab-child1.component';

describe('TabChild1Component', () => {
  let component: TabChild1Component;
  let fixture: ComponentFixture<TabChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
