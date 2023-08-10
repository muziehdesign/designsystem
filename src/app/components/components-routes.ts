import { Routes } from '@angular/router';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
import { demoOf } from 'src/app/demonstration/utilities';
import { ButtonsDemoComponent } from '../../demos/buttons-demo.component';

export const componentRoutes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then((b) => b.AboutComponent),
    },
    {
        path: 'accessibility',
        loadComponent: () => import('./accessibility/accessibility.component').then((b) => b.AccessibilityComponent),
    },
    {
        path: 'accordion',
        loadComponent: () => import('./accordion/accordion.component').then((b) => b.AccordionComponent),
    },
    {
        path: 'alerts',
        loadComponent: () => import('./alerts/alerts.component').then((b) => b.AlertsComponent),
    },
    {
        path: 'breadcrumbs',
        loadComponent: () => import('./breadcrumbs/breadcrumbs.component').then((b) => b.BreadcrumbsComponent),
    },
    {
        path: 'breakpoints',
        loadComponent: () => import('./breakpoints/breakpoints.component').then((b) => b.BreakpointsComponent),
    },
    {
        path: 'buttons',
        loadComponent: () => import('./buttons/buttons.component').then((b) => b.ButtonsComponent),
        providers: [{ provide: DEMONSTRATIONS, useValue: demoOf(ButtonsDemoComponent), multi: true }],
    },
    {
        path: 'color',
        loadComponent: () => import('./color/color.component').then((b) => b.ColorComponent),
    },
    {
        path: 'content',
        loadComponent: () => import('./content/content.component').then((b) => b.ContentComponent),
    },
    {
        path: 'datetimepicker',
        loadComponent: () => import('./datetime-picker-guidelines/datetime-picker-guidelines.component').then((b) => b.DatetimePickerGuidelinesComponent),
    },
    {
        path: 'descriptionlist',
        loadComponent: () => import('./description-list/description-list.component').then((b) => b.DescriptionListComponent),
    },
    {
        path: 'emptystate',
        loadComponent: () => import('./empty-state/empty-state.component').then((b) => b.EmptyStateComponent),
    },
    {
        path: 'grid',
        loadComponent: () => import('./grid/grid.component').then((b) => b.GridComponent),
    },
    {
        path: 'typography',
        loadComponent: () => import('./typography/typography.component').then((b) => b.TypographyComponent),
    },
    {
        path: 'iconography',
        loadComponent: () => import('./iconography/iconography.component').then((b) => b.IconographyComponent),
    },
    {
        path: 'layout',
        loadComponent: () => import('./layout/layout.component').then((b) => b.LayoutComponent),
    },
    {
        path: 'form',
        loadComponent: () => import('./form/form.component').then((b) => b.FormComponent),
    },
    {
        path: 'inline-message',
        loadComponent: () => import('./inline-message/inline-message/inline-message.component').then((b) => b.InlineMessageComponent),
    },
    {
        path: 'address-form',
        loadComponent: () => import('./address-form/address-form.component').then((b) => b.AddressFormComponent),
    },
    {
        path: 'formcontrols',
        children: [
            {
                path: '',
                loadComponent: () => import('./form-controls/form-controls.component').then((c) => c.FormControlsComponent),
            },
            {
                path: 'textinput',
                loadComponent: () => import('./form-controls/text-input/text-input.component').then((c) => c.TextInputComponent),
            },
            {
                path: 'textarea',
                loadComponent: () => import('./form-controls/textarea/textarea.component').then((c) => c.TextareaComponent),
            },
            {
                path: 'select',
                loadComponent: () => import('./form-controls/select/select.component').then((c) => c.SelectComponent),
            },
            {
                path: 'radio',
                loadComponent: () => import('./form-controls/radio/radio.component').then((c) => c.RadioComponent),
            },
            {
                path: 'checkbox',
                loadComponent: () => import('./form-controls/checkbox/checkbox.component').then((c) => c.CheckboxComponent),
            },
            {
                path: 'inline-message',
                loadComponent: () => import('./inline-message/inline-message/inline-message.component').then((c) => c.InlineMessageComponent),
            }
        ],
    },
    {
        path: 'menudropdown',
        loadComponent: () => import('./dropdown-menu-guidelines/dropdown-menu-guidelines.component').then((b) => b.DropdownMenuGuidelinesComponent),
    },
    {
        path: 'modal',
        loadComponent: () => import('./modal-guidelines/modal-guidelines.component').then((b) => b.ModalGuidelinesComponent),
    },
    {
        path: 'pageheader',
        loadComponent: () => import('./page-header-guidelines/page-header-guidelines.component').then((b) => b.PageHeaderGuidelinesComponent),
    },
    {
        path: 'pagination',
        loadComponent: () => import('./pagination-guidelines/pagination-guidelines.component').then((b) => b.PaginationGuidelinesComponent),
    },
    {
        path: 'progressbar',
        loadComponent: () => import('./progress-bar-guidelines/progress-bar-guidelines.component').then((b) => b.ProgressBarGuidelinesComponent),
    },
    {
        path: 'resulttable',
        loadComponent: () => import('./result-table-guidelines/result-table-guidelines.component').then((b) => b.ResultTableGuidelinesComponent),
    },
    {
        path: 'spinner',
        loadComponent: () => import('./spinner-guidelines/spinner-guidelines.component').then((b) => b.SpinnerGuidelinesComponent),
    },
    {
        path: 'table',
        loadComponent: () => import('./table/table.component').then((b) => b.TableComponent),
    },
    {
        path: 'tabs',
        loadComponent: () => import('./tabs/tabs.component').then((b) => b.TabsComponent),
    },
    {
        path: 'toggle',
        loadComponent: () => import('./toggle-guidelines/toggle-guidelines.component').then((b) => b.ToggleGuidelinesComponent),
    },
    {
        path: 'tooltip',
        loadComponent: () => import('./tooltip/tooltip.component').then((b) => b.TooltipComponent),
    },
    {
        path: 'skeletonloader',
        loadComponent: () => import('./skeleton-loader/skeleton-loader.component').then((b) => b.SkeletonLoaderComponent),
    },
    {
        path: 'wizard',
        loadComponent: () => import('./wizard/wizard.component').then((b) => b.WizardComponent),
    },
];
