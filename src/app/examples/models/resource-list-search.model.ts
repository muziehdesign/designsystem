import { ResourceStatus } from "./resource-status.enum";

export class ResourceListSearchModel {
    page: number = 1;
    pageSize: number = 20;
    status?: ResourceStatus;
    name? : string;
}