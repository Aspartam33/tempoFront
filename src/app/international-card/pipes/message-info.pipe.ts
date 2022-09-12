import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageIC'
})
export class MessageInfo implements PipeTransform {

  transform(value: string): any {
    if( value === 'Pago Aprobado' ){
      return 'Operación exitosa';
    } else {
      return 'Operación fallida'
    }
  }

}
