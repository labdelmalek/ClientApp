import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-accounts-table-transactions',
  templateUrl: './accounts-table-transactions.component.html',
  styleUrls: ['./accounts-table-transactions.component.css']
})
export class AccountsTableTransactionsComponent implements OnInit {

  @Input() accounts : Array<Compte>;
  @Output() IdAccount = new EventEmitter();
  totalRecords : string;
  page : number = 1;
  showVar: boolean = true;
  constructor(private compte:CompteService) { }

  ngOnInit(): void {
 
  }
  getAccNum(data){
    this.compte.getAccountIdByNA(data).subscribe(res=>{
      console.log(res);
      this.IdAccount.emit(res);
    })
      }
  
  def(b:any) : boolean{
    return isUndefined(b);
  } 
}
