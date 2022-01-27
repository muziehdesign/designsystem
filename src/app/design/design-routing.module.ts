import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BreakpointsComponent } from './breakpoints/breakpoints.component';
import { ButtonDesignComponent } from './button-design/button-design.component';
import { ColorComponent } from './color/color.component';
import { ContentComponent } from './content/content.component';
import { DescriptionListComponent } from './description-list/description-list.component';
import { DesignComponent } from './design.component';
import { DropdownMenuGuidelinesComponent } from './dropdown-menu-guidelines/dropdown-menu-guidelines.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { IconographyComponent } from './iconography/iconography.component';
import { LayoutComponent } from './layout/layout.component';
import { ModalGuidelinesComponent } from './modal-guidelines/modal-guidelines.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressBarGuidelinesComponent } from './progress-bar-guidelines/progress-bar-guidelines.component';
import { ResultTableGuidelinesComponent } from './result-table-guidelines/result-table-guidelines.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SpinnerGuidelinesComponent } from './spinner-guidelines/spinner-guidelines.component';
import { TabChild1Component } from './tab-child1/tab-child1.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypographyComponent } from './typography/typography.component';
import { WizardComponent } from './wizard/wizard.component';
import { DatetimePickerGuidelinesComponent } from './datetime-picker-guidelines/datetime-picker-guidelines.component';
import { ToggleGuidelinesComponent } from './toggle-guidelines/toggle-guidelines.component';

const routes: Routes = [
    {
        path: 'design',
        component: DesignComponent,
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'accessibility', component: AccessibilityComponent },
            { path: 'alerts', component: AlertsComponent },
            { path: 'breadcrumbs', component: BreadcrumbsComponent },
            { path: 'breakpoints', component: BreakpointsComponent },
            { path: 'color', component: ColorComponent },
            { path: 'content', component: ContentComponent },
            { path: 'datetimepicker', component: DatetimePickerGuidelinesComponent },
            { path: 'descriptionlist', component: DescriptionListComponent },
            { path: 'emptystate', component: EmptyStateComponent },
            { path: 'grid', component: GridComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'iconography', component: IconographyComponent },
            { path: 'layout', component: LayoutComponent },
            { path: 'form', component: FormComponent },
            { path: 'accordion', component: AccordionComponent },
            { path: 'button', component: ButtonDesignComponent },
            { path: 'menudropdown', component: DropdownMenuGuidelinesComponent },
            { path: 'modal', component: ModalGuidelinesComponent },
            { path: 'pagination', component: PaginationComponent },
            { path: 'progressbar', component: ProgressBarGuidelinesComponent },
            { path: 'formcontrols', component: FormControlsComponent },
            { path: 'resulttable', component: ResultTableGuidelinesComponent },
            { path: 'spinner', component: SpinnerGuidelinesComponent },
            { path: 'skeletonloader', component: SkeletonLoaderComponent },
            { path: 'table', component: TableComponent },
            { path: 'tabs', component: TabsComponent, children: [{ path: 'child1', component: TabChild1Component }] },
            { path: 'toggle', component: ToggleGuidelinesComponent },
            { path: 'tooltip', component: TooltipComponent },
            { path: 'wizard', component: WizardComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DesignRoutingModule { }
