export const navigationLinks: NavigationLink[] = [
    {
        name: 'Foundations',
        children: [
            { name: 'Accessibility', link: '/foundations/accessibility' },
            { name: 'Color', link: '/foundations/colors' },
            { name: 'Grid', link: '/foundations/grid' },
            { name: 'Breakpoints', link: '/foundations/breakpoints' },
            { name: 'Iconography', link: '/foundations/iconography' },
            { name: 'Typography', link: '/foundations/typography' },
        ],
    },
    {
        name: 'Patterns',
        children: [
            { name: 'Content', link: '/patterns/content' },
            { name: 'Form', link: '/patterns/form' },
            { name: 'Result table', link: '/patterns/resulttable' },
            { name: 'Inline Editing', link: '/patterns/inlineediting' },
            { name: 'Infinite scroll', link: '/patterns/infinitescroll' },
        ],
    },
    {
        name: 'Components',
        children: [
            { name: 'Accordion', link: '/components/accordion' },
            { name: 'Alerts', link: '/components/alerts' },
            { name: 'Badge', inactive: true, link: '/components/badge' },
            { name: 'Breadcrumbs', link: '/components/breadcrumbs' },
            { name: 'Button', link: '/components/buttons' },
            { name: 'Split button', inactive: true },
            { name: 'Collapsible', inactive: true, link: '/components/collapsible' },
            { name: 'Description lists', link: '/components/descriptionlist' },
            { name: 'Dropdown menu', link: '/components/menudropdown' },
            {
                name: 'Dialogs',
                link: '/components/modal',
                children: [
                    { name: 'Modal', link: '/components/modal' },
                    { name: 'Drawer', link: '/components/drawer' },
                ],
            },
            { name: 'Empty state', link: '/components/emptystate' },
            { name: 'Filter', link: '/components/filter' },
            {
                name: 'Form',
                link: '/components/formcontrols',
                children: [
                    { name: 'Text input', link: '/components/formcontrols/textinput' },
                    { name: 'Number input', inactive: true, link: '/components/formcontrols/numberinput' },
                    { name: 'Phone input', inactive: true, link: '/components/formcontrols/phoneinput' },
                    { name: 'Text area', link: '/components/formcontrols/textarea' },
                    { name: 'Radio', link: '/components/formcontrols/radio' },
                    { name: 'Checkbox', link: '/components/formcontrols/checkbox' },
                    { name: 'Select', link: '/components/formcontrols/select' },
                    { name: 'Date time picker', link: '/components/datetimepicker' },
                ],
            },
            { name: 'Page header', link: '/components/pageheader' },
            { name: 'Pagination', link: '/components/pagination' },
            { name: 'Popover', link: '/components/popover' },
            { name: 'Progress bar', link: '/components/progressbar' },
            { name: 'Skeleton loader', link: '/components/skeletonloader' },
            { name: 'Spinner', link: '/components/spinner' },
            { name: 'Split button', inactive: true, link: '/components/splitbutton' },
            { name: 'Table', link: '/components/table' },
            { name: 'Tabs', link: '/components/tabs' },
            { name: 'Toast', inactive: true, link: '/components/toast' },
            { name: 'Toggle', link: '/components/toggle' },
            { name: 'Tooltips', inactive: true, link: '/components/tooltip' },
            { name: 'Wizard', inactive: true, link: '/components/wizard' },
        ],
    },
    {
        name: 'Examples',
        children: [
            { name: 'Resource list', link: '/examples/resourcelist' },
            { name: 'Resource detail', link: '/examples/resourcedetail' },
        ],
    },
];

export interface NavigationLink {
    name?: string;
    link?: string;
    inactive?: boolean;
    children?: NavigationLink[];
}
