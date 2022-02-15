import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PageEvent } from '../models/page-event';
import { ResultTableHarness } from '../testing/result-table-harness';
import { ResultTableComponent } from './result-table.component';
import { ResultTableModel } from './result-table.model';

describe('ResultTableComponent', () => {
    let component: ResultTableComponent;
    let fixture: ComponentFixture<ResultTableComponent>;
    let resultTableHarness: ResultTableHarness;

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
        resultTableHarness = new ResultTableHarness(() => fixture.debugElement.query(By.css('.result-table')));
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

    const paginationTestSetup = [
        { totalResults: 10, results: [], paginatorVisible: false },
        { totalResults: 0, results: [], paginatorVisible: false },
        { totalResults: 10, results: [{ name: 'myname' }], paginatorVisible: true },
    ];

    paginationTestSetup.forEach((pageSetup) => {
        it(`should ${pageSetup.paginatorVisible ? 'show' : 'hide'} pagination for totalResults ${pageSetup.totalResults} and results count ${pageSetup.results.length}`, () => {
            // arrange
            component.model = {
                page: 8,
                pageSize: 20,
                totalResults: pageSetup.totalResults as number,
                results: pageSetup.results as unknown[],
            };

            // act
            fixture.detectChanges();

            // assert
            expect(resultTableHarness.hasPaginationAvailable()).toBe(pageSetup.paginatorVisible);
        });
    });

    it('should display no results', () => {
        // arrange
        component.model = {
            page: 8,
            pageSize: 20,
            totalResults: 10,
            results: [],
        };

        // act
        fixture.detectChanges();

        // assert
        expect(resultTableHarness.hasNoResultsMessage()).toBeTrue();
        expect(resultTableHarness.hasErrorMessage()).toBeFalse();
    });

    it('should display error', () => {
        // arrange
        component.error = new Error();

        // act
        fixture.detectChanges();

        // assert
        expect(resultTableHarness.hasErrorMessage()).toBeTrue();
        expect(resultTableHarness.hasNoResultsMessage()).toBeFalse();
    });

    it('should display results summary message', () => {
        // act
        fixture.detectChanges();

        // assert
        expect(resultTableHarness.hasPaginationAvailable()).toBeTrue();
        expect(resultTableHarness.getResultsHeaderSummary()).toBe('1 - 10 of 3 results');
    });
});
