import { CodeDemonstration } from "./code-demonstration";

// the existence of `demoOf` is merely so that we can search & replace component code files during build time
// it doesn't do anything
export const demoOf = <T>(arg: new (...args: any[]) => T): CodeDemonstration => {
    return {
        name: arg.name,
        selector: '<app-></app>',
        files: {
            'component.ts': 'component.ts',
            'component.scss': 'component.scss'
        },
    } as CodeDemonstration;
};
