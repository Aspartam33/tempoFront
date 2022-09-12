
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard, CreditCardValidators } from 'angular-cc-library';
//import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { defer, map, Subscription } from 'rxjs';
import { countries } from 'src/app/shared/store/country-data-store';
import { UserManagementComponent } from 'src/app/user-management/pages/user-management/user-management.component';

import { Imonth, IPaymentModel, Iyear } from '../../interfaces/cardform-interfaces';


@Component({
  selector: 'app-international-card',
  templateUrl: './international-card.component.html',
  styleUrls: ['./international-card.component.css']
})
export class InternationalCardComponent implements OnInit {

  title='PagoConTarjetaInternacional';
    
  ids_customer: string[] = ["V", "E"]; 
  ic_form: FormGroup;
 
 //deviceInfo: DeviceInfo;
 submitted: boolean = false;
@Input() paymentModel:IPaymentModel;

 seleccionados:string[]=[];

 monthlist:Imonth[] = [];
 month:Imonth=<Imonth>{};
 userIP: any;
 year = <Iyear>{};
 years:Iyear[] = [];

 constructor(private _fb: 
   FormBuilder,
   public router:Router, private route:ActivatedRoute, private http: HttpClient,) {}

 public ngOnInit() {
  //this.deviceInfo = this.deviceDectetorService.getDeviceInfo();
  const userAgent = window.navigator.userAgent;
  this.createrForm();
  this.GetMonths();
  this.GetYears();
  this.loadIP();

 }

createrForm(){
  this.ic_form = this._fb.group({
    keyId : "2C22B9AF-C092-4C1C-AF63-4CBF5C7B695E",
    publicKeyId: "a6ae2f299abae1a9cea1a446b120b130", 
    CardNumberGet: ['', [Validators.required,CreditCardValidators.validateCCNumber]],
    cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
    cardNumber:null,
    expirationDate: null,
    cardHolder:['',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
    amount:['',[Validators.required,Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
    typeId: ['', Validators.required],
    numbId: ['', [Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    expiryMonth: ['', Validators.required],
    expiryYear: ['', [Validators.required]],
    cardHolderID:null,
    cardHolderInfoId:null,
    ip:null,
    statusId:1,
    userId: this._fb.group({
      id: ['1']
    }),
  
      description:["",Validators.required],
   
    
     

     
    
  });
}
 get f(){
   return this.ic_form.controls;
 }
 
 GetMonths(){
  for (let index = 1; index <=12; index++) {
   this.month=<Imonth>{}
   if(index.toString().length===1){
    this.month.text="0"+index.toString();
    this.month.value="0"+index.toString();
   }else{
    this.month.text=index.toString();
    this.month.value=index.toString();
   }
    this.monthlist.push(this.month);

  }
}

GetYears(){
  let year = new Date().getFullYear();
  for (let index = year; index < year + 20; index++) {
  this.year = <Iyear>{};
  this.year.text = index.toString();
  this.year.value = index.toString();
  this.years.push(this.year)
    
  }
}
 public type$ = defer(() => this.ic_form.get('CardNumber').valueChanges).pipe(
   map((num: string) => CreditCard.cardType(num))
 );

 campoNoValido(campo: string) {
  return  this.ic_form.get(campo)?.errors &&  this.ic_form.get(campo)?.touched && this.ic_form.get(campo)?.invalid;
}

 
loadIP() {
  this.http.get('https://jsonip.com/').subscribe(
    (response: any) => {
      this.userIP = response.ip;
    }
  )
}

   submit() {
    let ipAddress = this.userIP;
    let CardHolderId =  this.ic_form.get('numbId').value;
    let cardHolderIdInfo=this.ic_form.get('typeId').value+this.ic_form.get('numbId').value;
    let ExpirationDate = this.ic_form.get('expiryMonth').value+'/'+this.ic_form.get('expiryYear').value;
    let test = this.ic_form.get('CardNumberGet').value.replace(/\s/g, '');
    this.ic_form.get('ip').patchValue(ipAddress);
    this.ic_form.get('cardNumber').patchValue(test);
    this.ic_form.get('cardHolderID').patchValue(CardHolderId);
    this.ic_form.get('expirationDate').patchValue(ExpirationDate);
    this.ic_form.get('cardHolderInfoId').patchValue(ExpirationDate);
    
    this.submitted = true;

    let data:any = this.ic_form.value;
    
    this.router.navigate(['./check-card'],{
      queryParams:{data:btoa(JSON.stringify(data))}
     })
   
    console.log('this.form', this.ic_form);
   
   
    
  }
}


