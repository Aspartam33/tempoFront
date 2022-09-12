import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { forkJoin, map } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { P2pService } from 'src/app/change-pocket/services/p2p.service';
import { p2p } from 'src/app/home/interfaces/p2p.interface';



@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {


  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmados' },
    { data: [], label: 'Recuperados' },
    { data: [], label: 'Activos' },
    { data: [], label: 'Defunciones' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5
      }
    },
    plugins: {
      legend: { display: true }
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'yellow',
      backgroundColor: 'rgba(200,200,0,0.3)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,210,0,0.3)',
    },
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(136, 136, 136,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  locale = 'es';

  countries: string[] = [];
  country: string = null;

  dateInit: Date;
  dateEnd: Date;
  minCovDate: Date;
  maxCovDate: Date;

  p2p: p2p[] = [];

  constructor(
    private localeService: BsLocaleService,
    private covidService: CovidService,
    private datePipe: DatePipe,
    private http: HttpClient,
    private p2pService: P2pService
  ) {
    this.localeService.use(this.locale);
    this.minCovDate = new Date('2020-1-22');
    this.maxCovDate = new Date();
    this.maxCovDate.setDate(this.maxCovDate.getDate() - 1);
  }

  ngOnInit(): void {

    this.p2pService.getAll().subscribe(p2p => this.p2p = p2p);
    this.getCountries();
  }

  getCountries(): void {
    this.covidService.getall().subscribe(
      data => {
        this.countries = Object.keys(data);
      }
    );
  }

  loadData(event: any): void {
    if (this.country && this.dateInit && this.dateEnd) {
      forkJoin([
        this.covidService.twoDates(this.country, this.dateInit, this.dateEnd).pipe(map(data => data.map(val => val.confirmed))),
        this.covidService.twoDates(this.country, this.dateInit, this.dateEnd).pipe(map(data => data.map(val => val.recovered))),
        this.covidService.twoDates
          (this.country, this.dateInit, this.dateEnd).pipe(map(data => data.map(val => val.confirmed - val.recovered - val.deaths))),
        this.covidService.twoDates(this.country, this.dateInit, this.dateEnd).pipe(map(data => data.map(val => val.deaths))),
        this.covidService.twoDates
          (this.country, this.dateInit, this.dateEnd).pipe(map(data => data.map(val => this.datePipe.transform(val.date, 'MMMM')))),
      ]).subscribe((
        [data0, data1, data2, data3, data4]
      ) => {
        this.lineChartData[0].data = data0;
        this.lineChartData[1].data = data1;
        this.lineChartData[2].data = data2;
        this.lineChartData[3].data = data3;
        this.lineChartLabels = data4;
      });
    }
  }
}
