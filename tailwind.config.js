const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{html,ts}', './projects/components/src/**/*.{html,ts}', './dist/**/*.{html,ts}'],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1400px',
        },
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                information: 'var(--color-information)',
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                danger: 'var(--color-danger)',
            },
            fontFamily: {
                sans: ['Roboto', 'system-ui', '-apple-system', 'ui-sans-serif', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    safelist: [
        {
            pattern: /bg-(red|green|blue|gray|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /text-(red|green|blue|gray|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
        },
        'nav-item',
        'nav-link',
    ],
    plugins: ['postcss-import', require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
