export const navigationLinks: NavigationLink[] = [
    /*{
        children: [
        { name: 'About', link: '/components/about' },
    ]},*/
    { name: 'Foundations', children: [
        { name: 'Accessibility', link: '/foundations/accessibility' },
        { name: 'Color', link: '/foundations/colors' },
        { name: 'Grid', link: '/foundations/grid' },
        { name: 'Breakpoints', link: '/foundations/breakpoints' },
        { name: 'Iconography', link: '/foundations/iconography' },
        { name: 'Typography', link: '/foundations/typography' }
    ]},
    { name: 'Patterns', children: [
        { name: 'Content', link: '/patterns/content' },
        { name: 'Form', link: '/patterns/form' },
        { name: 'Result table', link: '/patterns/resulttable'},
        { name: 'Inline Editing', link: '/patterns/inlineediting'},
        { name: 'Infinite scroll', link: '/patterns/infinitescroll'},
    ]},
    { name: 'Components', children: [
        { name: 'Accordion', link: '/components/accordion' },
        { name: 'Alerts', link: '/components/alerts' },
        // badge
        { name: 'Breadcrumbs', link: '/components/breadcrumbs' },
        //{ name: 'Button', link: '/components/button' },
        { name: 'Button', link: '/components/buttons' },
        { name: 'Date time picker', link: '/components/datetimepicker'},
        { name: 'Description lists', link: '/components/descriptionlist' },
        { name: 'Dropdown menu', link: '/components/menudropdown' },
        { name: 'Empty state', link: '/components/emptystate' },
        { 
            name: 'Form controls', 
            link: '/components/formcontrols',
            children: [
                { name: 'Text input', link: '/components/formcontrols/textinput' },
                { name: 'Text area', link: '/components/formcontrols/textarea' },
                { name: 'Radio', link: '/components/formcontrols/radio' },
                { name: 'Checkbox', link: '/components/formcontrols/checkbox' },
                { name: 'Select', link: '/components/formcontrols/select' }
            ]
        },
        { name: 'Inline Message', link: '/components/inline-message' },
        { name: 'Modal', link: '/components/modal' },
        { name: 'Page header', link: '/components/pageheader'},
        { name: 'Pagination', link: '/components/pagination' },
        { name: 'Progress bar', link: '/components/progressbar' },
        { name: 'Skeleton loader', link: '/components/skeletonloader' },
        { name: 'Spinner', link: '/components/spinner' },
        { name: 'Table', link: '/components/table' },
        { name: 'Tabs', link: '/components/tabs' },
        { name: 'Toggle', link: '/components/toggle'},
        { name: 'Tooltip', inactive: true, link: '/components/tooltip' },
        { name: 'Wizard', inactive: true, link: '/components/wizard',  },
    ]},
    { name: 'Examples', children: [
        { name: 'Resource list', link: '/examples/resourcelist'},
        { name: 'Resource detail', link: '/examples/resourcedetail'}
    ]}
];

export interface NavigationLink {
    name?: string;
    link?: string;
    inactive?: boolean;
    children?: NavigationLink[];
}
