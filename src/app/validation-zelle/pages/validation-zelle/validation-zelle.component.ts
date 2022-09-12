import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-zelle',
  templateUrl: './validation-zelle.component.html',
  styleUrls: ['./validation-zelle.component.css']
})
export class ValidationZelleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ids_customer:string[]=["V","E","J","P","E"];

  seleccionados:string[]=[];
}
