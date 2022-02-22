export const navigationLinks: NavigationLink[] = [
    {
        children: [
        { name: 'About', link: '/design/about' },
    ]},
    { name: 'Foundations', children: [
        { name: 'Accessibility', link: '/design/accessibility' },
        { name: 'Color', link: '/design/color' },
        { name: 'Grid', link: '/design/grid' },
        { name: 'Breakpoints', link: '/design/breakpoints' },
        { name: 'Iconography', link: '/design/iconography' },
        { name: 'Typography', link: '/design/typography' }
    ]},
    { name: 'Patterns', children: [
        { name: 'Content', link: '/design/content' },
        { name: 'Form', link: '/design/form' },
        { name: 'Result table', link: '/design/resulttable'}
    ]},
    { name: 'Components', children: [
        { name: 'Accordion', link: '/design/accordion' },
        { name: 'Alerts', link: '/design/alerts' },
        // badge
        { name: 'Breadcrumbs', link: '/design/breadcrumbs' },
        { name: 'Button', link: '/design/button' },
        { name: 'Date time picker', link: '/design/datetimepicker'},
        { name: 'Description lists', link: '/design/descriptionlist' },
        { name: 'Dropdown menu', link: '/design/menudropdown' },
        { name: 'Empty state', link: '/design/emptystate' },
        { name: 'Form controls', link: '/design/formcontrols' },
        { name: 'Modal', link: '/design/modal' },
        { name: 'Page header', link: '/design/pageheader'},
        { name: 'Pagination', link: '/design/pagination' },
        { name: 'Progress bar', link: '/design/progressbar' },
        { name: 'Skeleton loader', link: '/design/skeletonloader' },
        { name: 'Spinner', link: '/design/spinner' },
        { name: 'Table', link: '/design/table' },
        { name: 'Tabs', link: '/design/tabs' },
        { name: 'Toggle', link: '/design/toggle'},
        { name: 'Tooltip', inactive: true, link: '/design/tooltip' },
        { name: 'Wizard', inactive: true, link: '/design/wizard',  },
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
