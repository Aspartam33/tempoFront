import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeBank'
})
export class CodeBankPipe implements PipeTransform {

  transform(value: string): any {
    if( value === '0134' ){
      return 'Banesco Banco Universal'
    }
  }

}
