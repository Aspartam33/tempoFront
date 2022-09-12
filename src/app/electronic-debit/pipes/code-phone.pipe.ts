import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codePhone'
})
export class CodePhonePipe implements PipeTransform {

  transform(value: string): any {
    if( value === '58414' ){
      return '0414'
    } if( value === '58424' ){
      return '0424'
    } if( value === '58412' ){
      return '0412'
    } if( value === '58416' ){
      return '0416'
    } if( value === '58426' ){
      return '0426'
    }
  }

}
