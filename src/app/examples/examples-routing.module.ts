import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { ResourceDetailResolverResolver } from './resource-detail-resolver.resolver';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ResourceListComponent } from './resource-list/resource-list.component';

const routes: Routes = [
    {
        path: 'examples',
        component: ExamplesComponent,
        children: [
            { path: 'resourcedetail', component: ResourceDetailComponent, resolve: { delay: ResourceDetailResolverResolver } },
            { path: 'resourcelist', component: ResourceListComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamplesRoutingModule {}
