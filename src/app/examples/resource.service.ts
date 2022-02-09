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
        const page = model.page || 1;
        const pageSize = model.pageSize || 20;
        const data = [...Array(140).keys()].map(
            (i) =>
                <ResourceSummaryModel>{
                    resourceSummaryId: i * page + 1 + pageSize * 100,
                    name: names[i % names.length],
                    status: statuses[i % statuses.length],
                }
        );

        const filtered = data.filter((m) => (!model.name || m.name == model.name) && (!model.status || m.status == model.status));

        return of({
            page: page,
            pageSize: pageSize,
            totalResults: filtered.length,
            results: filtered.slice(page * pageSize, (page + 1) * pageSize),
        });
    }
}
