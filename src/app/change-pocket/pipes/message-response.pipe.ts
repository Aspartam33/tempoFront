import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message'
})
export class MessageResponsePipe implements PipeTransform {

  transform(value: string): any {
    if( value === 'P2P980 - Afiliacion no Existe' ){
      return 'Afiliación no existe'
    }
  }

}
