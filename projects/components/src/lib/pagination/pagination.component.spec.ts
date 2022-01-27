import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { PAGINATION_DEFAULT_OPTIONS } from './pagination-default-options.token';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
    let component: PaginationComponent;
    let fixture: ComponentFixture<PaginationComponent>;
    let subs: Subscription;
    //
    // this includes the previous/next buttons
    const getPageLinksCount = () => fixture.debugElement.queryAll(By.css('.page-link')).length;
    const getPageLink = (index: number) => fixture.debugElement.query(By.css(`.page-link:nth-child(${index})`));
    const getPreviousButton = () => fixture.debugElement.query(By.css('.page-link:nth-child(1)'));
    const getNextButton = () => fixture.debugElement.query(By.css(`.page-link:nth-child(${getPageLinksCount()})`));
    const getPageEllipsisCount = () => fixture.debugElement.queryAll(By.css('.page-ellipsis')).length;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PaginationComponent, SvgIconComponent],
            providers: [
                {
                    provide: PAGINATION_DEFAULT_OPTIONS,
                    useValue: {
                        pageSize: 12,
                        pageSizeOptions: [20, 50, 100, 2000],
                    },
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        subs = component.changePage.subscribe((event) => {
            // this mimics what then component would eventually do.
            component.page = event.page;
            component.pageSize = event.pageSize;
            component.ngOnChanges();
        });
        fixture.detectChanges();
    });

    afterEach(() => {
        subs.unsubscribe();
    });

    it('should render and navigate with 7 or less records', () => {
        // initial assert
        expect(component).toBeTruthy();
        expect(component.pageSize).toBe(12);
        expect(component.pageSizeOptions).toEqual([20, 50, 100, 2000]);

        // arrange
        component.length = 14;
        component.pageSize = 2;
        component.ngOnChanges();

        // act
        fixture.detectChanges();

        const paginatorWrapper = fixture.debugElement.query(By.css('.pagination-wrapper'));

        // assert
        expect(paginatorWrapper).not.toBeNull();
        expect(getPageLinksCount()).toBe(9);
        expect(component.pages).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(getPreviousButton()).not.toBeNull();
        expect(getNextButton()).not.toBeNull();
        expect(getPreviousButton().classes['disabled']).toBeTrue();
        expect(getNextButton().classes['disabled']).toBeUndefined();
        expect((getPageLink(2).nativeElement as HTMLButtonElement).textContent).toBe('1');
        expect(getPageLink(2).classes['active']).toBeTrue();
        expect(getPageLink(4).classes['active']).toBeUndefined();

        // act
        // hit the number 3
        (getPageLink(4).nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // assert
        expect(getPageLink(2).classes['active']).toBeUndefined();
        expect(getPageLink(4).classes['active']).toBeTrue();
        expect(getPreviousButton().classes['disabled']).toBeUndefined();
        expect(getNextButton().classes['disabled']).toBeUndefined();

        // act
        // hit the number 2 using the previous button
        (getPreviousButton().nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // assert
        expect(component.pages).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(getPageLink(4).classes['active']).toBeUndefined();
        expect(getPageLink(3).classes['active']).toBeTrue();
        expect(getPreviousButton().classes['disabled']).toBeUndefined();
        expect(getNextButton().classes['disabled']).toBeUndefined();
    });

    it('should render and navigate with a large number of pages', () => {
        expect(component).toBeTruthy();

        // arrange
        // meaning 14 pages because 41 / 3 = 13.666
        component.length = 41;
        component.pageSize = 3;
        component.ngOnChanges();

        // act
        fixture.detectChanges();

        // assert
        expect(getPageLinksCount()).toBe(9);
        expect(component.pages).toEqual([1, 2, 3, 4, 5, -1, 14]);
        expect(getPageEllipsisCount()).toBe(1);
        expect((getPageLink(6).nativeElement as HTMLButtonElement).textContent).toBe('5');
        expect(getPreviousButton().classes['disabled']).toBeTrue();
        expect(getNextButton().classes['disabled']).toBeUndefined();
        expect(getPageLink(2).classes['active']).toBeTrue();

        // act
        // hit the number 5 in the middle
        (getPageLink(6).nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // assert
        expect(component.pages).toEqual([1, -1, 4, 5, 6, -1, 14]);
        expect(getPageEllipsisCount()).toBe(2);
        expect((getPageLink(2).nativeElement as HTMLButtonElement).textContent).toBe('1');
        expect((getPageLink(3).nativeElement as HTMLButtonElement).textContent).toBe('...');
        expect((getPageLink(4).nativeElement as HTMLButtonElement).textContent).toBe('4');
        expect((getPageLink(5).nativeElement as HTMLButtonElement).textContent).toBe('5');
        expect((getPageLink(6).nativeElement as HTMLButtonElement).textContent).toBe('6');
        expect((getPageLink(7).nativeElement as HTMLButtonElement).textContent).toBe('...');
        expect((getPageLink(8).nativeElement as HTMLButtonElement).textContent).toBe('14');
        expect(getPageLink(5).classes['active']).toBeTrue();

        // act
        // hit the number 6 using the next button
        (getNextButton().nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // assert
        expect(component.pages).toEqual([1, -1, 5, 6, 7, -1, 14]);
        expect(getPageEllipsisCount()).toBe(2);
        expect(getPageLink(5).classes['active']).toBeTrue();

        // act
        // hit number 14
        (getPageLink(8).nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // assert
        expect(component.pages).toEqual([1, -1, 10, 11, 12, 13, 14]);
        expect(getPageEllipsisCount()).toBe(1);
        expect((getPageLink(2).nativeElement as HTMLButtonElement).textContent).toBe('1');
        expect((getPageLink(3).nativeElement as HTMLButtonElement).textContent).toBe('...');
        expect((getPageLink(4).nativeElement as HTMLButtonElement).textContent).toBe('10');
        expect((getPageLink(5).nativeElement as HTMLButtonElement).textContent).toBe('11');
        expect((getPageLink(6).nativeElement as HTMLButtonElement).textContent).toBe('12');
        expect((getPageLink(7).nativeElement as HTMLButtonElement).textContent).toBe('13');
        expect((getPageLink(8).nativeElement as HTMLButtonElement).textContent).toBe('14');
        expect(getPageLink(8).classes['active']).toBeTrue();
        expect(getPreviousButton().classes['disabled']).toBeUndefined();
        expect(getNextButton().classes['disabled']).toBeTrue();

        // act
        // hit the number 1
        (getPageLink(2).nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // assert
        expect(component.pages).toEqual([1, 2, 3, 4, 5, -1, 14]);
        expect(getPageEllipsisCount()).toBe(1);
        expect((getPageLink(2).nativeElement as HTMLButtonElement).textContent).toBe('1');
        expect((getPageLink(3).nativeElement as HTMLButtonElement).textContent).toBe('2');
        expect((getPageLink(4).nativeElement as HTMLButtonElement).textContent).toBe('3');
        expect((getPageLink(5).nativeElement as HTMLButtonElement).textContent).toBe('4');
        expect((getPageLink(6).nativeElement as HTMLButtonElement).textContent).toBe('5');
        expect((getPageLink(7).nativeElement as HTMLButtonElement).textContent).toBe('...');
        expect((getPageLink(8).nativeElement as HTMLButtonElement).textContent).toBe('14');
        expect(getPageLink(2).classes['active']).toBeTrue();
        expect(getPreviousButton().classes['disabled']).toBeTrue();
        expect(getNextButton().classes['disabled']).toBeUndefined();
    });

    it('should change page size to 100', () => {
        expect(component).toBeTruthy();

        // arrange
        component.length = 60;
        component.pageSize = 10;
        component.ngOnChanges();

        // act
        fixture.detectChanges();

        // assert
        expect(getPageLinksCount()).toBe(8);
        expect(component.pages).toEqual([1, 2, 3, 4, 5, 6]);
        expect(getPageEllipsisCount()).toBe(0);
        expect(getPreviousButton().classes['disabled']).toBeTrue();
        expect(getNextButton().classes['disabled']).toBeUndefined();
        expect(getPageLink(2).classes['active']).toBeTrue();

        // act
        // hit the number 5 in the middle
        (getPageLink(3).nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // assert
        expect(getPageLink(2).classes['active']).toBeUndefined();
        expect(getPageLink(3).classes['active']).toBeTrue();

        // act
        // changes the page size
        component.changePageSize('100');
        fixture.detectChanges();

        // assert
        expect(component.pages).toEqual([1]);
        expect(component.page).toBe(1);
        expect(component.pageSize).toBe(100);
        expect(getPageEllipsisCount()).toBe(0);
        expect(getPreviousButton().classes['disabled']).toBeTrue();
        expect(getNextButton().classes['disabled']).toBeTrue();
        expect(getPageLink(2).classes['active']).toBeTrue();
    });

    it('should skip page number change when matches current page or is below/above allowed boundaries', () => {
        // act
        component.length = 30;
        component.pageSize = 20;
        component.ngOnChanges();

        let didFireEvent = false;
        const eventSubs = component.changePage.subscribe(() => (didFireEvent = true));

        // act
        fixture.detectChanges();
        component.changePageNumber(1);

        // assert
        expect(didFireEvent).toBeFalse();

        // act
        component.changePageNumber(0);

        // assert
        expect(didFireEvent).toBeFalse();

        // act
        component.changePageNumber(3);

        // assert
        expect(didFireEvent).toBeFalse();

        // clear subscription
        eventSubs.unsubscribe();
    });

    it('should skip page size change when matches current page size', () => {
        // act
        component.length = 30;
        component.pageSize = 20;
        component.ngOnChanges();

        let didFireEvent = false;
        const eventSubs = component.changePage.subscribe(() => (didFireEvent = true));

        // act
        fixture.detectChanges();
        component.changePageSize('20');

        // assert
        expect(didFireEvent).toBeFalse();

        // clear subscription
        eventSubs.unsubscribe();
    });
});
