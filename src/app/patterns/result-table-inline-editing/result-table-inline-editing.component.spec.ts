import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTableInlineEditingComponent } from './result-table-inline-editing.component';

describe('ResultTableInlineEditingComponent', () => {
  let component: ResultTableInlineEditingComponent;
  let fixture: ComponentFixture<ResultTableInlineEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultTableInlineEditingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultTableInlineEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
