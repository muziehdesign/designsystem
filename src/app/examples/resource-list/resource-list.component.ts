import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Paged } from '../models/paged.model';
import { ResourceListSearchModel } from '../models/resource-list-search.model';
import { ResourceSummaryModel } from '../models/resource-summary.model';
import { ResourceService } from '../resource.service';

@Component({
    selector: 'app-resource-list',
    templateUrl: './resource-list.component.html',
    styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent implements OnInit {
    paged$: Observable<Paged<ResourceSummaryModel>>;
    model: ResourceListSearchModel = new ResourceListSearchModel();
    constructor(private service: ResourceService) {
        this.paged$ = service.search(new ResourceListSearchModel());
    }

    ngOnInit(): void {}

    search() {
      console.log('searching', this.model);
    }
}
