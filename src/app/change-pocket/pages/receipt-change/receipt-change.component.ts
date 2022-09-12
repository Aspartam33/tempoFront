import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-receipt-change',
  templateUrl: './receipt-change.component.html',
  styleUrls: ['./receipt-change.component.css']
})
export class ReceiptChangeComponent implements OnInit {
  typePhone: any;
  numbPhone: any;
  constructor(
    private router: Router,
    public route: ActivatedRoute
  ) { }

  filterParam: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterParam = JSON.parse(params['data']);
      let phoneNum = this.filterParam.dataResponse.p2p.accountTo.phoneNum;
      let typePhone = phoneNum.substring(0,5);
      this.typePhone = typePhone;
      let numbPhone = phoneNum.substring(5,12);
      this.numbPhone = numbPhone;
    })
  }

}
