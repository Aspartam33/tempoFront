import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashCardPipe'
})
export class CardHashPipe implements PipeTransform {

    transform(cardNumber:string,visibleDigits: number): string {
    //no enmascara primeros y ultimos cuatro digitos
    let firstVisibleNumbers = cardNumber.slice(0, visibleDigits);
    let maskedNumbers = cardNumber.slice(visibleDigits, -visibleDigits);   
    let lastVisibleNumbers = cardNumber.slice(-visibleDigits);   
    return firstVisibleNumbers + maskedNumbers.replace(/./g, '*') + lastVisibleNumbers;
      }

}
