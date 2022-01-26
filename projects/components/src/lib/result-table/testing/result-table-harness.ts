import { ComponentHarness, BaseHarnessFilters, HarnessPredicate } from '@angular/cdk/testing';
export class ResultTableHarness extends ComponentHarness {
    static hostSelector = 'mz-result-table';

    async displays(columns: string[], rows: [string[]]) {
        const table = await this.locatorFor('.table');
    }
}