import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';

import { PageLoadingIndicatorComponent } from './page-loading-indicator.component';

describe('PageLoadingIndicatorComponent', () => {
    let component: PageLoadingIndicatorComponent;
    let fixture: ComponentFixture<PageLoadingIndicatorComponent>;
    let eventSubject: ReplaySubject<RouterEvent>;
    const getHtmlContent = () => fixture.debugElement.query(By.css('div'));

    beforeEach(async () => {
        eventSubject = new ReplaySubject<RouterEvent>(1);
        await TestBed.configureTestingModule({
            declarations: [PageLoadingIndicatorComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide: Router,
                    useValue: {
                        navigate: () => new Promise((resolve) => resolve(true)),
                        events: eventSubject.asObservable(),
                    } as Partial<Router>,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageLoadingIndicatorComponent);
        component = fixture.componentInstance;
        component.expectedMilisecondsDelay = 4;
        fixture.detectChanges();
    });

    it('should not reach content renderization within one second', fakeAsync(() => {
        // arrange
        eventSubject.next(new NavigationStart(1, 'http://test.com', 'popstate'));

        // act
        tick(3);
        fixture.detectChanges();

        // assert
        expect(component).toBeTruthy();
        expect(component.isLoading).toBeFalse();
        expect(getHtmlContent()).toBeNull();

        // act
        eventSubject.next(new NavigationEnd(1, 'http://test.com', 'popstate'));
        fixture.detectChanges();

        // assert
        expect(component.isLoading).toBeFalse();
        expect(getHtmlContent()).toBeNull();
    }));

    it('should render content when delay hits one second and then hide it', fakeAsync(() => {
        // arrange
        eventSubject.next(new NavigationStart(1, 'http://test.com', 'popstate'));

        tick(4);

        // act
        fixture.detectChanges();

        // assert
        expect(component.isLoading).toBeTrue();
        expect(getHtmlContent()).not.toBeNull();

        // arrange
        eventSubject.next(new NavigationError(1, 'http://test.com', 'popstate'));

        // act
        fixture.detectChanges();

        // assert
        expect(component.isLoading).toBeFalse();
        expect(getHtmlContent()).toBeNull();
    }));

    it('should hide content when end navigation is hit in one second', fakeAsync(() => {
        // arrange
        eventSubject.next(new NavigationStart(1, 'http://test.com', 'popstate'));
        eventSubject.next(new NavigationCancel(1, 'http://test.com', 'popstate'));

        tick(4);

        // act
        fixture.detectChanges();

        // assert
        expect(component.isLoading).toBeFalse();
        expect(getHtmlContent()).toBeNull();
    }));
});
