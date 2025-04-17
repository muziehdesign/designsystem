import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filter2Component } from './filter.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  template: `
      <mz-filter2>
        <form #myForm="ngForm">
          <input type="text" [(ngModel)]="name" name="name" />
        </form>
      </mz-filter2>
  `,
})
class TestHostComponent {
  name = '';
}


describe('Filter2Component', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [Filter2Component, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async() => {
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });
});
