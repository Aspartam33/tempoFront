import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
@Component({
  selector: 'app-change-pocket',
  templateUrl: './change-pocket.component.html',
  styleUrls: ['./change-pocket.component.css']
})
export class ChangePocketComponent implements OnInit {

  deviceInfo: DeviceInfo;
  userIP: any;
  submitted: boolean = false;
  @Input() any;

  constructor(
    private fb: FormBuilder,
    private deviceDetectorService: DeviceDetectorService,
    private http: HttpClient,
    private router: Router) { }


  ngOnInit(): void {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    this.loadIP();
  }


  //lista de cedulas, bancos y numero de teléfono
  ids_customer: string[] = ["V", "E"];
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
  ];
  banks = [
    {
      code: '0134',
      bank: 'Banesco Banco Universal'
    },
    {
      code: '0114',
      bank: 'Bancaribe, Banco Universal'
    },
    {
      code: '0156',
      bank: '100% Banco, Banco Universal'
    },
    {
      code: '"0171',
      bank: 'Banco Activo'
    },
    {
      code: '0172',
      bank: 'Bancamiga, Banco Microfinanciero'
    },
  ];

  p2pForm: FormGroup = this.fb.group({
    device: this.fb.group({
      type: this.deviceDetectorService.deviceType,
      description: this.deviceDetectorService.device,
      ipAddress: null
    }),
    accountTo: this.fb.group({
      bankId: ['',[Validators.required, Validators.minLength(3)]],
      customerId: null,
      phoneNum: null,
      typeId: ['', Validators.required],
      numbId: ['', [Validators.required, Validators.minLength(6)]],
      typePhone: ['', Validators.required],
      numbPhone: ['', [Validators.required, Validators.minLength(7)]],
    }),
    paymentId: ['', Validators.required],
    amount: ['', [Validators.required, Validators.minLength(1)]],
    concept: ['', [Validators.required, Validators.minLength(3)]],
    user: this.fb.group({
      id: ['1']
    })
  });


  onSubmit() {
    let ipAddress = this.userIP;
    let phoneNum = this.p2pForm.get('accountTo.typePhone').value + this.p2pForm.get('accountTo.numbPhone').value;
    let costumerId = this.p2pForm.get('accountTo.typeId').value + this.p2pForm.get('accountTo.numbId').value;
    this.p2pForm.get('device.ipAddress').patchValue(ipAddress);
    this.p2pForm.get('accountTo.phoneNum').patchValue(phoneNum);
    this.p2pForm.get('accountTo.customerId').patchValue(costumerId);

    this.submitted = true;
    let data: any = this.p2pForm.value;
    this.router.navigate(['./check-change'], {
      queryParams: { data: JSON.stringify(data) }
    })
  }

  loadIP() {
    this.http.get('https://jsonip.com/').subscribe(
      (response: any) => {
        this.userIP = response.ip;
      }
    )
  }
  campoNoValido(campo: string) {
    return this.p2pForm.get(campo)?.errors && this.p2pForm.get(campo)?.touched
  }
}
