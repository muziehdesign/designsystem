import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvent } from '../models/page-event';
import { ResultTableComponent } from './result-table.component';
import { ResultTableModel } from './result-table.model';

describe('ResultTableComponent', () => {
    let component: ResultTableComponent;
    let fixture: ComponentFixture<ResultTableComponent>;

    const results = {
        totalResults: 3,
        page: 1,
        pageSize: 10,
        results: [
            {
                name: 'prod1',
                number: 1,
                weight: 10,
            } as any,
        ],
    } as ResultTableModel<any>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResultTableComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.model = results;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit PageEvent', () => {
        // arrange
        const pageEvent = { page: 1, pageSize: 20 } as PageEvent;
        const table = fixture.debugElement.nativeElement.querySelector('.result-table');

        spyOn(component.pageChange, 'emit');

        // act
        component.changePage(pageEvent, table);

        // assert
        expect(component.pageChange.emit).toHaveBeenCalledWith(Object({ page: 1, pageSize: 20 }));
    });

    it('should emit PageEvent on searchAgain', () => {
        // arrange
        spyOn(component.pageChange, 'emit');

        // act
        component.searchAgain();

        // assert
        expect(component.pageChange.emit).toHaveBeenCalledWith(Object({ page: 1, pageSize: 10 }));
    });

    it('should get states depending on loanding and error', () => {
        // arrange
        component.loading = false;
        component.error = undefined;

        // assert
        expect(component.state).toEqual('succeeded');

        // arrange
        component.loading = true;
        component.error = undefined;

        // assert
        expect(component.state).toEqual('loading');

        // arrange
        component.loading = false;
        component.error = {} as Error;

        // assert
        expect(component.state).toEqual('failed');
    });
});
