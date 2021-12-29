import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';

const routes: Routes = [
  {
    path: 'examples', component: ExamplesComponent, children: [
      { path: 'resourcedetail', component: ResourceDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
