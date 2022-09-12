import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(currentMessage){
    this.messageSource.next(currentMessage);
  }

}
