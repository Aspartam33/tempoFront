import { Component, Input} from '@angular/core';
import { p2p } from 'src/app/home/interfaces/p2p.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

@Input() p2p: p2p[] = [];

}
