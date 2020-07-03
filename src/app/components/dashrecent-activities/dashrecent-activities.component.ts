import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-dashrecent-activities',
  templateUrl: './dashrecent-activities.component.html',
  styleUrls: ['./dashrecent-activities.component.css']
})
export class DashrecentActivitiesComponent implements OnInit {
  public selectedName:any;
  page;
  totalRecords;
  
  @Input() transaction : Array<Transaction>;
  constructor(){
   
  }
  
accountId:number;

  ngOnInit(){
  }
 
  public highlightRow(c) {
    this.selectedName = c.id_transaction;
  }

  public hideScale() {
    this.selectedName = "";
  }
}
