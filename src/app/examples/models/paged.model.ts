export interface Paged<T> {
    results: T[];
    page: number;
    pageSize: number;
    totalResults: number;
}