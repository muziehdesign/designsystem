import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzAsync } from './async.component';

describe('AsyncComponent', () => {
  let component: MzAsync;
  let fixture: ComponentFixture<MzAsync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MzAsync]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzAsync);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
