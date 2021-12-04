import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlsComponent } from './form-controls/form-controls.component';

const routes: Routes = [
  {
    path: 'design',
    children: [{ path: 'formcontrols', component: FormControlsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule {}
