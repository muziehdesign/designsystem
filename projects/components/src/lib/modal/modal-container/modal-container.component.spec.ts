import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzModalContainer } from './modal-container.component';

describe('MzModalContainer', () => {
    let component: MzModalContainer;
    let fixture: ComponentFixture<MzModalContainer>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MzModalContainer],
        }).compileComponents();

        fixture = TestBed.createComponent(MzModalContainer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
