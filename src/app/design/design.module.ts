import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { DesignComponent } from './design.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';
import { ColorComponent } from './color/color.component';
import { TypographyComponent } from './typography/typography.component';
import { IconographyComponent } from './iconography/iconography.component';
import { BreakpointsComponent } from './breakpoints/breakpoints.component';
import { ButtonComponent } from './button/button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { GridComponent } from './grid/grid.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DescriptionListComponent } from './description-list/description-list.component';
import { AlertsComponent } from './alerts/alerts.component';


@NgModule({
  declarations: [
    FormControlsComponent,
    DesignComponent,
    AboutComponent,
    ContentComponent,
    NavigationComponent,
    FormComponent,
    ColorComponent,
    TypographyComponent,
    IconographyComponent,
    BreakpointsComponent,
    ButtonComponent,
    AccordionComponent,
    AccessibilityComponent,
    TableComponent,
    LayoutComponent,
    SvgIconComponent,
    BreadcrumbsComponent,
    GridComponent,
    EmptyStateComponent,
    TabsComponent,
    TooltipsComponent,
    SkeletonLoaderComponent,
    PaginationComponent,
    DescriptionListComponent,
    AlertsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
