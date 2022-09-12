import { HttpClient } from '@angular/common/http';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { InternationalCardService } from '../../services/international-card.service';

@Component({
  selector: 'app-verification-card',
  templateUrl: './verification-card.component.html',
  styleUrls: ['./verification-card.component.css']
})
export class VerificationCardComponent implements OnInit {

  public filterParam : any;
  constructor(private router:Router,public route:ActivatedRoute,
    private httpClient:HttpClient,
    private internationalCardService:InternationalCardService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.filterParam = JSON.parse(atob(params['data']));
     
      console.log(this.filterParam);
    })
    }
    
    confirmOperation(){
      this.internationalCardService.completePayment(this.filterParam)
      .subscribe(resp=>{
        
        console.log(resp);
        this.router.navigate(['./recipt-card'],{
          queryParams:{data:btoa(JSON.stringify(resp))}
         })
      }), (err) => console.warn(err);
    }
  
}
