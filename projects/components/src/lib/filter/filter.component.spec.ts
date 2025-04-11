import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { FilterOptionModel } from './filter-option.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    const testOptions: FilterOptionModel<string | number>[] = [
        { label: 'Option 1', selected: false, value: 1 },
        { label: 'Option 2', selected: false, value: 2 },
        { label: 'Option 3', selected: false, value: 3 },
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, FormsModule, OverlayModule, FilterComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        component.options = testOptions.map(option => Object.assign({}, option));
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should set the default filter', () => {
        expect(component.filterLabel).toBe('Filter');
    });

    it('should set the filter label with selected options', () => {
        
        // arrange
        component.options[0].selected = true;
        component.options[2].selected = true;

        // act
        fixture.detectChanges();

        // assert
        expect(component.filterLabel).toBe('Filter: Option 1, Option 3');
    });

    it('should filter options based on the search input', () => {
        
         // arrange
        component.search = '1';
        const filtered = component.filteredOptions;

         // assert
        expect(filtered.length).toBe(1);
        expect(filtered[0].label).toContain('1');
    });

    it('should deselect other options if allowMultipleSelect is false', () => {
        
         // arrange
        component.allowMultipleSelect = false; 
        component.options[0].selected = true;
        component.options[1].selected = true;

        // act
        fixture.detectChanges();

        // assert
        component.onOptionChange(component.options[0]);
        expect(component.options[0].selected).toBeTrue();
        expect(component.options[1].selected).toBeFalse();
    });

    it('should close dropdown and emit selectionChange when applySelection', () => {
        
        // arrange
        spyOn(component, 'closeDropdown');
        spyOn(component['selectionChange'], 'emit');
        component.options[0].selected = true;

        // act
        component.applySelection();
        
        // assert
        expect(component.closeDropdown).toHaveBeenCalled();
        expect(component['selectionChange'].emit).toHaveBeenCalledWith([component.options[0]]);
    });
});
