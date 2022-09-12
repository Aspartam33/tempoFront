import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { P2pService } from '../../services/p2p.service';

@Component({
  selector: 'app-verification-change',
  templateUrl: './verification-change.component.html',
  styleUrls: ['./verification-change.component.css']
})
export class VerificationChangeComponent implements OnInit {
  public filterParam: any;
  constructor(
    private p2pService: P2pService,
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

  onSubmit() {

    this.p2pService.p2pPost(this.filterParam)
      .subscribe(resp => {
        this.router.navigate(['./recipt-change'],
          {
            queryParams: { data: JSON.stringify(resp) }
          })
      }), (err) => console.warn(err.smg);
  }
}
