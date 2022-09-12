import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipt-card',
  templateUrl: './receipt-card.component.html',
  styleUrls: ['./receipt-card.component.css']
})
export class ReceiptCardComponent implements OnInit {

  constructor(private router:Router,public route:ActivatedRoute) { }
  
  filterParam:any;
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.filterParam = JSON.parse(atob(params['data']));

     
      console.log(this.filterParam);
    })
  }

}
