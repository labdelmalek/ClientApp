import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions-history-table',
  templateUrl: './transactions-history-table.component.html',
  styleUrls: ['./transactions-history-table.component.css']
})
export class TransactionsHistoryTableComponent implements OnInit {

  @Input() transaction$:Array<Transaction>;

  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
   // this.accountId=localStorage.getItem('currentAccount');
  }}


