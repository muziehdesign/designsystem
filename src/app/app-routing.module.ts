import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleGuideComponent } from 'muzieh-design';
import { GuidelinePageComponent } from './layout/guideline-page/guideline-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'components/about' },
    {
        path: 'components',
        loadChildren: () => import('./components/components-routes').then((x) => x.componentRoutes),
        component: GuidelinePageComponent,
    },
    {
        path: 'patterns',
        loadChildren: () => import('./patterns/patterns-routes').then((x) => x.patternsRoutes),
        component: GuidelinePageComponent,
    },
    {
        path: 'foundations',
        loadChildren: () => import('./foundations/foundations-routes').then((x) => x.foundationsRoutes),
        component: GuidelinePageComponent,
    },
    {
        path: 'styleguide',
        component: StyleGuideComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }), StyleGuideComponent],
    exports: [RouterModule],
})
export class AppRoutingModule {}
