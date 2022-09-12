import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-verificatio-debit',
  templateUrl: './verificatio-debit.component.html',
  styleUrls: ['./verificatio-debit.component.css']
})
export class VerificatioDebitComponent implements OnInit {

  public filterParam: any;

  constructor(
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.filterParam = JSON.parse(params['data']);
        console.log(this.filterParam);
      }
    )
  }

}
