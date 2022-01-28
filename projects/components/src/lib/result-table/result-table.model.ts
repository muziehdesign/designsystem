
export class ResultTableModel<T> {
    state: 'succeeded' | 'failed' = 'succeeded';
    total: number = 0;
    results: T[] = [];
    page: number = 1;
    pageSize: number = 20;
}
