
export type ResultTableModel<T> = {
    totalItems: number;
    items: T[];
    pageNumber: number;
    pageSize: number;
}
