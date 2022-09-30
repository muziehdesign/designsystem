module.exports = {
    files: 'src/app/components/*/routes.ts',
    from: /demoOf\(.*\)/g,
    to: 'test'
};