import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mzEnumDisplay'
})
export class EnumDisplayPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const result = value.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

}
