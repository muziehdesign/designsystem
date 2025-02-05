import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PageEvent } from '../models/page-event';
import { PaginationComponent } from '../pagination/pagination.component';
import { ResultTableComponent } from './result-table.component';
import { ResultTableModel } from './result-table.model';

describe('ResultTableComponent', () => {
    let component: ResultTableComponent;
    let fixture: ComponentFixture<ResultTableComponent>;

    const results = {
        totalItems: 3,
        pageNumber: 1,
        pageSize: 10,
        items: [
            {
                name: 'prod1',
                number: 1,
                weight: 10,
            } as any,
        ],
    } as ResultTableModel<any>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResultTableComponent, PaginationComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.model = results;
    });

    it('should emit PageEvent', () => {
        // arrange
        const pageEvent = { pageNumber: 1, pageSize: 20 } as PageEvent;
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

    it('should get states depending on loading and error', () => {
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

    const testCases = [
        {
            model: { page: 2, pageSize: 10, totalResults: 35, results: [...Array(10).keys()] },
            caption: '11 - 20 of 35 results',
            pagination: true,
        },
        {
            model: { page: 1, pageSize: 10, totalResults: 10, results: [...Array(10).keys()] },
            caption: '1 - 10 of 10 results',
            pagination: false,
        },
        {
            model: { page: 1, pageSize: 5, totalResults: 10, results: [...Array(10).keys()] },
            caption: '1 - 10 of 10 results',
            pagination: false,
        },
        {
          model: { page: 2, pageSize: 100, totalResults: 113, results: [...Array(13).keys()] },
          caption: '101 - 113 of 113 results',
          pagination: true,
        },
        {
          model: { page: 1, pageSize: 100, totalResults: 100, results: [...Array(100).keys()] },
          caption: '1 - 100 of 100 results',
          pagination: true,
        },
        {
          model: { page: 2, pageSize: 100, totalResults: 200, results: [...Array(100).keys()] },
          caption: '101 - 200 of 200 results',
          pagination: true,
        },
    ];
    testCases.forEach((testCase, i) => {
        it(`should display results - ${i}`, async () => {
            // arrange
            component.model = testCase.model;

            // act
            fixture.detectChanges();
            await fixture.whenStable();

            // assert
            const paginations = fixture.debugElement.queryAll(By.css('.table-pagination'));
            expect(paginations.length).toEqual(1);
            const caption = fixture.debugElement.query(By.css('caption')).nativeElement as HTMLElement;
            expect(caption.textContent?.trim()).toEqual(testCase.caption);
            const stateMessage = fixture.debugElement.query(By.css('.state-message'));
            expect(stateMessage).toBeNull();
        });
    });

    it('should display pagination based on options', async () => {
        // arrange
        component.model = testCases[0].model;
        component.options = {hidePagination: false};
        // act
        fixture.detectChanges();
        await fixture.whenStable();

        // assert
        const paginations = fixture.debugElement.query(By.css('.table-pagination'));
        expect(paginations).not.toBeNull();
    });

    it('should hide pagination based on options', async () => {
        // arrange
        component.model = testCases[0].model;
        component.options = {hidePagination: true};
        // act
        fixture.detectChanges();
        await fixture.whenStable();

        // assert
        const paginations = fixture.debugElement.query(By.css('.table-pagination'));
        expect(paginations).toBeNull();
    });

    it('should display no result state', async () => {
        // arrange
        component.model = {
            pageNumber: 1,
            pageSize: 10,
            totalItems: 0,
            items: [],
        };

        // act
        fixture.detectChanges();
        await fixture.whenStable();

        // assert
        const pagination = fixture.debugElement.query(By.css('.table-pagination'));
        expect(pagination).toBeNull();
        const caption = fixture.debugElement.query(By.css('caption'));
        expect(caption).toBeNull();
        const stateMessage = fixture.debugElement.query(By.css('.state-message .title')).nativeElement as HTMLElement;
        expect(stateMessage.innerText?.trim()).toEqual('No results found');
    });

    it('should display error state', fakeAsync(() => {
        // arrange
        component.model = { pageNumber: 2, pageSize: 10, totalItems: 35, items: [...Array(10).keys()] };
        component.error = new Error();

        // act
        fixture.detectChanges();
        fixture.whenStable();

        // assert
        const pagination = fixture.debugElement.query(By.css('.table-pagination'));
        expect(pagination).toBeNull();
        const caption = fixture.debugElement.query(By.css('caption'));
        expect(caption).toBeNull();
        const stateMessage = fixture.debugElement.query(By.css('.state-message .title')).nativeElement as HTMLElement;
        expect(stateMessage.innerText?.trim()).toEqual('Something went wrong');
    }));
});
