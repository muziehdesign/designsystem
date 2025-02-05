import { Component, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingState } from 'projects/components/src/public-api';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, delay, finalize, switchMap, tap } from 'rxjs/operators';
import { Paged } from '../models/paged.model';
import { ResourceListSearchModel } from '../models/resource-list-search.model';
import { ResourceSummaryModel } from '../models/resource-summary.model';
import { ParamsUtility } from '../params-utility';
import { ResourceService } from '../resource.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-resource-list',
    templateUrl: './resource-list.component.html',
    styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent implements OnInit {
    paged: Signal<Paged<ResourceSummaryModel> | undefined>;
    loading: boolean = true;
    error?: Error;
    model: ResourceListSearchModel = new ResourceListSearchModel();
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ResourceService) {
        this.paged = toSignal(this.activatedRoute.queryParams.pipe(
            tap(() => {
                this.loading = true;
                this.error = undefined;
            }),
            switchMap((params) => {
                this.model = ParamsUtility.convertFromParams(params);
                return this.service.search(this.model);
            }),
            delay(800),
            catchError((e, caught) => {
                this.error = e;
                throw caught;
            }),
            tap(() => (this.loading = false))
        ));
    }

    ngOnInit(): void {

    }

    search(p?: Partial<ResourceListSearchModel>) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: ParamsUtility.convertToParams({...this.model, ...p}),
            queryParamsHandling: 'merge',
        });
    }

    clearAll() {
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: {} });
    }
}
