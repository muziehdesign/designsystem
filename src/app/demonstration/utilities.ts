export interface CodeDemonstration {
    name: string;
    files: { [key: string]: string };
}

export const demoOf = <T>(arg: new (...args: any[]) => T): CodeDemonstration => {
    return {
        name: arg.name,
        files: {
            'component.ts': 'component.ts',
            'component.scss': 'component.scss'
        },
    } as CodeDemonstration;
};
