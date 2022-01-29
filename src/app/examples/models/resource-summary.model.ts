import { ResourceStatus } from "./resource-status.enum";

export interface ResourceSummaryModel {
    resourceSummaryId: number;
    name: string;
    status: ResourceStatus;
}