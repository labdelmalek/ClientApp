import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Credit } from 'src/app/Models/Credit.Model';

@Component({
  selector: 'app-tab-credit',
  templateUrl: './tab-credit.component.html',
  styleUrls: ['./tab-credit.component.css']
})
export class TabCreditComponent implements OnInit {

 
  @Input() credits : Array<Credit>;
  @Output() credit = new EventEmitter<Credit>();

  totalRecords : string;
  page : number = 1;
  selectedName;
  constructor() { }

  ngOnInit(): void {
  }
  select(credit : Credit){
    this.credit.emit(credit);
  }

}
