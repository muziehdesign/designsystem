export class ResultTableModel<T> {
    error?: Error;
    state: 'succeeded' | 'failed' | 'loading' = 'loading';
    total: number = 0;
    results: T[] = [];
    page: number = 1;
    pageSize: number = 20;

    public setAsFailed(error: Error): void {
        this.state = 'failed';
        this.error = error;
    }

    public setAsSucceeded(data: T[], total?: number, page: number = 1, pageSize?: number) {
        this.state = 'succeeded';
        this.results = data;
        this.total = total || data.length;
        this.page = page;
        this.pageSize = pageSize || 20;
    }

    public setAsLoading() {
        this.state = 'loading';
    }
}