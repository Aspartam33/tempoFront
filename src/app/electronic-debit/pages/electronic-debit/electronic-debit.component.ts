import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronic-debit',
  templateUrl: './electronic-debit.component.html',
  styleUrls: ['./electronic-debit.component.css']
})
export class ElectronicDebitComponent implements OnInit {
  business: 'INDUSTRIAS DIGITAL UX'
  costumerId: 'J300349454';
  submitted: boolean = false;
  @Input() any;

  phone = [
    {
      code: '58412',
      phone: '0412'
    },
    {
      code: '58414',
      phone: '0414'
    },
    {
      code: '58424',
      phone: '0424'
    },
    {
      code: '58416',
      phone: '0416'
    },
    {
      code: '58426',
      phone: '0426'
    }
  ]


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  debitForm: FormGroup = this.fb.group({
    phoneNum: null,
    email      : [''],
    typePhone  : ['', Validators.required],
    numbPhone  : ['', Validators.minLength(7)],
    amount     : ['', [Validators.required, Validators.minLength(1)]],
    business   : null,
    concept    : ['', [Validators.required, Validators.minLength(3)]],
    customerId : null,
    user : this.fb.group({
      id       : ['1']
    })
  });

  onSubmit() {
    let costumerId = this.costumerId;
    let business = this.business;
    let phoneNum = this.debitForm.get('typePhone').value + this.debitForm.get('numbPhone').value;
    this.debitForm.get('phoneNum').patchValue(phoneNum);
    this.debitForm.get('business').patchValue(business);
    this.debitForm.get('customerId').patchValue(costumerId);

    this.submitted = true;
    let data: any = this.debitForm.value;
    this.router.navigate(['./check-debit'], {
      queryParams: { data: JSON.stringify(data) }
    })
  }

  campoNoValido(campo: string) {
    return this.debitForm.get(campo)?.errors && this.debitForm.get(campo)?.touched
  }
}
