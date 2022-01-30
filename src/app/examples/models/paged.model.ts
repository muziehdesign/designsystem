import { ResultTableModel } from "muzieh-ngcomponents";

export interface Paged<T> extends ResultTableModel<T> {
    results: T[];
    page: number;
    pageSize: number;
    totalResults: number;
}