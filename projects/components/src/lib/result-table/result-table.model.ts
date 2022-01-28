import { LoadingState } from "../models/loading-state";

export class ResultTableModel<T> {
    state: 'succeeded' | 'failed' = 'succeeded';
    total: number = 0;
    results: T[] = [];
    page: number = 1;
    pageSize: number = 20;
    loadingState: LoadingState = {loading: true};

    public setAsFailed(error: Error): void {
        this.state = 'failed';
        this.loadingState.error = error;
        this.loadingState.loading = false;
    }

    public setAsSucceeded(data: T[], total?: number, page: number = 1, pageSize?: number) {
        this.state = 'succeeded';
        this.results = data;
        this.total = total || data.length;
        this.page = page;
        this.pageSize = pageSize || 20;
        this.loadingState.loading = false;
    }

    public setAsLoading() {
        this.loadingState.loading = true;
    }
}
