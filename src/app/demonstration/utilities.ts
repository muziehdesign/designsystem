export const demoOf = <T>(arg: new (...args: any[]) => T): string => {
    return arg.name;
}