
export interface ResultTableModel<T> {
    totalResults: number;
    results: T[];
    page: number;
    pageSize: number;
}
