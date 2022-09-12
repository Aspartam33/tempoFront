import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'nullWithDefault'
})
export class NullWithDefaultPipe implements PipeTransform {
  
  transform(value: any, defaultText: string = '0'): any {
    if (typeof value === 'undefined' || value === null) {
      return defaultText;
    }
    else if(value === 'Null'){
        return defaultText;
    }
  
    return value;
  }
  
}