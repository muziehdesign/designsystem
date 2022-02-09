import { ComponentHarness, BaseHarnessFilters, HarnessPredicate } from '@angular/cdk/testing';
export class ResultTableHarness extends ComponentHarness {
    static hostSelector = 'mz-result-table';
    protected getTable = this.locatorFor('.result-table');
    protected locateTableHeaders = this.locatorForAll('th');

    async displays(columns: string[], rows: [string[]]) {
        const table = await this.locatorFor('.result-table');
    }

    async getHeaders(): Promise<string[]> {
        const headers = await this.locateTableHeaders();
        return Promise.all(headers.map(h=>h.text())).then(data=>{
            return data;
        });
    }
 }