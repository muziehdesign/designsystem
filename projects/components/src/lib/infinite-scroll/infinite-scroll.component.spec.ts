import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Component } from '@angular/core';

@Component({
    template: `
        <mz-infinite-scroll [items]="testItems" [isLoading]="isLoading">
            <ng-template #itemTemplate let-item>
                <div class="custom-template">{{ item.label }}</div>
            </ng-template>
        </mz-infinite-scroll>
    `,
})
class TestHostComponent {
    testItems = [
        { id: 1, label: 'Custom Item 1' },
        { id: 2, label: 'Custom Item 2' },
    ];
    isLoading = false;
}

describe('InfiniteScrollComponent', () => {
    let component: InfiniteScrollComponent;
    let fixture: ComponentFixture<InfiniteScrollComponent>;
    let itemsMock = [
        { id: 1, label: 'Item 1' },
        { id: 2, label: 'Item 2' },
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestHostComponent],
            imports: [CommonModule, InfiniteScrollComponent, SpinnerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfiniteScrollComponent);
        component = fixture.componentInstance;
        component.items = itemsMock;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit loadMore when scrolled to the bottom', () => {
        // arrange
        spyOn(component.loadMore, 'emit');
        const scrollEvent = new Event('scroll');
        Object.defineProperty(scrollEvent, 'target', { value: { offsetHeight: 100, scrollTop: 500, scrollHeight: 600 } });

        // act
        component.onContainerScroll(scrollEvent);

        // assert
        expect(component.loadMore.emit).toHaveBeenCalled();
    });

    it('should handle item click and emit selected item', () => {
        spyOn(component.itemSelected, 'emit');
        const item = itemsMock[0];

        // act
        component.onItemClick(item);

        // assert
        expect(component.selectedItem).toEqual(item);
        expect(component.itemSelected.emit).toHaveBeenCalledWith(item);
    });

    it('should display spinner when isLoading is true', () => {
        // arrange
        component.isLoading = true;
        fixture.detectChanges();
        const spinner = fixture.debugElement.query(By.directive(SpinnerComponent));

        // assert
        expect(spinner).toBeTruthy();
    });

    it('should not display spinner when isLoading is false', () => {
        // arrange
        component.isLoading = false;
        fixture.detectChanges();
        const spinner = fixture.debugElement.query(By.directive(SpinnerComponent));

        // assert
        expect(spinner).toBeNull();
    });

    describe('Content Projection in InfiniteScrollComponent', () => {
        let hostFixture: ComponentFixture<TestHostComponent>;

        beforeEach(() => {
            hostFixture = TestBed.createComponent(TestHostComponent);
            hostFixture.detectChanges(); // Trigger initial data binding and render
        });

        it('should project custom content inside the infinite scroll component', () => {
            // arrange
            const projectedContent = hostFixture.debugElement.query(By.css('.custom-template')).nativeElement;

            // assert
            expect(projectedContent).toBeTruthy();
            expect(projectedContent.textContent).toContain('Custom Item 1');
        });
    });
});
