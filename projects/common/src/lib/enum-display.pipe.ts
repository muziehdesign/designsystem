import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumDisplay',
})
export class EnumDisplayPipe implements PipeTransform {
    transform(value: any, ...args: any[]): string {
        const result = value.replace(/([A-Z])/g, ' $1');
        const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        return finalResult;
    }
}
