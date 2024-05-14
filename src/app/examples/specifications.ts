import 'reflect-metadata'

export const IsNumber = (target: any, memberName: string) => {
    Reflect.defineMetadata(memberName, { type: TYPES.number }, target);
};

export const IsString = (target: any, memberName: string) => {
    Reflect.defineMetadata(memberName, { type: TYPES.string }, target);
};

const TYPES = {
    number: 'number',
    string: 'string',
};
