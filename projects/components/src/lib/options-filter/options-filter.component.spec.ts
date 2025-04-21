import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OptionsFilterComponent } from './options-filter.component';
import { FilterOptionModel } from '../filter/filter-option.model';

describe('OptionsFilterComponent', () => {
    let component: OptionsFilterComponent;
    let fixture: ComponentFixture<OptionsFilterComponent>;

    const testOptions: FilterOptionModel<string>[] = [
        { label: 'option 1', selected: false, value: '1' },
        { label: 'option 2', selected: true, value: '2' },
        { label: 'option 3', selected: false, value: '3' },
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OptionsFilterComponent, FormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(OptionsFilterComponent);
        component = fixture.componentInstance;
        component.options = testOptions;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should emit change on apply', () => {
        spyOn(component.change, 'emit');
        component.selected = '3';
        component.apply();
        expect(component.change.emit).toHaveBeenCalledWith('3');
    });

    it('should clear selection on clear()', () => {
        spyOn(component.change, 'emit');
        component.clear();
        expect(component.selected).toBeUndefined();
        expect(component.change.emit).toHaveBeenCalledWith(undefined);
    });
});
