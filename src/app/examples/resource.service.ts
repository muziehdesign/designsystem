import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Paged } from './models/paged.model';
import { ResourceListSearchModel } from './models/resource-list-search.model';
import { ResourceStatus } from './models/resource-status.enum';
import { ResourceSummaryModel } from './models/resource-summary.model';

@Injectable({
    providedIn: 'root',
})
export class ResourceService {
    constructor() {}

    search(model: ResourceListSearchModel): Observable<Paged<ResourceSummaryModel>> {
        const statuses = Object.values(ResourceStatus);
        const names = ['Usagi Tsukino', 'Ami Mizuno', 'Setsuna Meioh', 'Haruka Tenoh'];
        const data = [...Array(140).keys()].map(
            (i) =>
                <ResourceSummaryModel>{
                    resourceSummaryId: i * model.page + 1 + model.pageSize * 100,
                    name: names[i % names.length],
                    status: statuses[i % statuses.length],
                }
        );

        return of({
            page: model.page,
            pageSize: model.pageSize,
            totalResults: data.length,
            results: data.filter((m) => (!model.name || m.name == model.name) && (!model.status || m.status == model.status)).slice(model.page * model.pageSize, (model.page + 1) * model.pageSize),
        });
    }
}
