import { IsNumber, IsString } from "../specifications";
import { ResourceStatus } from "./resource-status.enum";

export class ResourceListSearchModel {
    @IsNumber
    page?: number;
    @IsNumber
    pageSize?: number;
    @IsString
    status?: ResourceStatus;
    @IsString
    name? : string;
    @IsString
    sort? : string;
}