import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { DesignComponent } from './design.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { ColorComponent } from './color/color.component';
import { TypographyComponent } from './typography/typography.component';
import { IconographyComponent } from './iconography/iconography.component';
import { BreakpointsComponent } from './breakpoints/breakpoints.component';
import { ButtonDesignComponent } from './button-design/button-design.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { GridComponent } from './grid/grid.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { TabsComponent } from './tabs/tabs.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { PaginationGuidelinesComponent } from './pagination-guidelines/pagination-guidelines.component';
import { DescriptionListComponent } from './description-list/description-list.component';
import { AlertsComponent } from './alerts/alerts.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { WizardComponent } from './wizard/wizard.component';
import { SharedModule } from '../shared/shared.module';
import { SpinnerGuidelinesComponent } from './spinner-guidelines/spinner-guidelines.component';
import { ResultTableGuidelinesComponent } from './result-table-guidelines/result-table-guidelines.component';
import { ProgressBarGuidelinesComponent } from './progress-bar-guidelines/progress-bar-guidelines.component';
import { ModalGuidelinesComponent } from './modal-guidelines/modal-guidelines.component';
import { NgbDropdown, NgbDropdownMenu, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TabChild1Component } from './tab-child1/tab-child1.component';
import { DropdownMenuGuidelinesComponent } from './dropdown-menu-guidelines/dropdown-menu-guidelines.component';
import { NAVIGATION_LINK_TOKEN } from '../navigation/navigation-links.token';
import { navigationLinks } from '../navigation/navigation-links';
import { CodeExampleComponent } from './code-example/code-example.component';
import { MuziehComponentsModule } from 'muzieh-ngcomponents';
import { DatetimePickerGuidelinesComponent } from './datetime-picker-guidelines/datetime-picker-guidelines.component';
import { ToggleGuidelinesComponent } from './toggle-guidelines/toggle-guidelines.component';
import { PageHeaderGuidelinesComponent } from './page-header-guidelines/page-header-guidelines.component';
import { ModalAddOrderComponent } from './modal-add-order/modal-add-order.component';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
    declarations: [
        FormControlsComponent,
        DesignComponent,
        AboutComponent,
        ContentComponent,
        FormComponent,
        ColorComponent,
        TypographyComponent,
        IconographyComponent,
        BreakpointsComponent,
        ButtonDesignComponent,
        AccordionComponent,
        AccessibilityComponent,
        TableComponent,
        LayoutComponent,
        BreadcrumbsComponent,
        GridComponent,
        EmptyStateComponent,
        TabsComponent,
        SkeletonLoaderComponent,
        PaginationGuidelinesComponent,
        DescriptionListComponent,
        AlertsComponent,
        TooltipComponent,
        WizardComponent,
        SpinnerGuidelinesComponent,
        ResultTableGuidelinesComponent,
        ProgressBarGuidelinesComponent,
        ModalGuidelinesComponent,
        TabChild1Component,
        DropdownMenuGuidelinesComponent,
        CodeExampleComponent,
        DatetimePickerGuidelinesComponent,
        ToggleGuidelinesComponent,
        PageHeaderGuidelinesComponent,
        ModalAddOrderComponent,
        ChangelogComponent,
    ],
    imports: [CommonModule, FormsModule, DesignRoutingModule, SharedModule, NgbModule, MuziehComponentsModule],
    providers: [{ provide: NAVIGATION_LINK_TOKEN, useValue: navigationLinks }],
})
export class DesignModule {}
