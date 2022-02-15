import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ResultTableComponent } from '../lib/result-table/result-table.component';
import { ResultTableModel } from '../lib/result-table/result-table.model';
import { MuziehComponentHarness } from './muzieh-component-harness';

export class ResultTableHarness extends MuziehComponentHarness<ResultTableComponent> {
    private refreshContainerEvent: () => DebugElement;

    private get resultTableDebugElement() {
        const containerDebugElement = this.refreshContainerEvent();
        if (!containerDebugElement) {
            throw new Error('Invalid container debug element');
        }
        const resultTableDebugElement = containerDebugElement.query(By.directive(ResultTableComponent));
        if (!resultTableDebugElement) {
            throw new Error('Invalid result table debug element');
        }
        return resultTableDebugElement;
    }

    get resultTableComponentInstance(): ResultTableComponent {
        return this.evaluateComponentInstance(this.resultTableDebugElement);
    }

    constructor(refreshContainerEvent: () => DebugElement) {
        super();
        this.refreshContainerEvent = refreshContainerEvent;
    }

    getHeaderColumns() {
        return this.resultTableDebugElement.queryAll(By.css('thead tr th')).map((td) => (td.nativeElement as HTMLTableCellElement).textContent?.trim());
    }

    getRenderedResults() {
        const contentDebugElement = this.resultTableDebugElement;
        const componentInstance = this.evaluateComponentInstance(contentDebugElement);
        const results = contentDebugElement.queryAll(By.css('tbody tr')).map((el) => el.queryAll(By.css('td')).map((td) => (td.nativeElement as HTMLTableCellElement).textContent?.trim()));
        const { page, pageSize, totalResults: total } = componentInstance.model as ResultTableModel<unknown>;

        return {
            results,
            page,
            pageSize,
            total,
        };
    }

    getResultsHeaderSummary() {
        const headerCaptionDebugElement = this.resultTableDebugElement.query(By.css('table caption'));
        if (!headerCaptionDebugElement) {
            throw new Error('DebugElement not found');
        }
        return (headerCaptionDebugElement.nativeElement as HTMLTableCaptionElement).textContent?.trim();
    }

    hasErrorMessage() {
        return this.resultTableDebugElement.queryAll(By.css('.state-message .title .text-danger')).length > 0;
    }

    hasNoResultsMessage() {
        const errorDebugElement = this.resultTableDebugElement.query(By.css('.state-message .title'));
        if (!errorDebugElement) {
            throw new Error('DebugElement not found');
        }
        return (errorDebugElement.nativeElement as HTMLDivElement).textContent?.trim() === 'No results found';
    }

    hasResultsHeaderSummary() {
        return this.resultTableDebugElement.queryAll(By.css('table caption')).length > 0;
    }

    private evaluateComponentInstance(container: DebugElement): ResultTableComponent {
        return container.componentInstance as ResultTableComponent;
    }
}
