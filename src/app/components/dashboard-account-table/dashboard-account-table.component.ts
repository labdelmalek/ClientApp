import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-dashboard-account-table',
  templateUrl: './dashboard-account-table.component.html',
  styleUrls: ['./dashboard-account-table.component.css']
})
export class DashboardAccountTableComponent implements OnInit {
  @Input() accounts : Array<Compte>;
  @Output() ccompte = new EventEmitter<Compte>();

  public epargne:any;
  public cheque:any;
  public isAuthenticated:any;
  totalRecords : string;
  page : number = 1;
  showVar: boolean = true;
  public selectedName:any;
  constructor(private clientsservice:CompteService,private router:Router,private routeactuel:ActivatedRoute) { }

  ngOnInit(): void {
//  console.log(( this.accounts[0].taux)=== undefined);
//console.log(isUndefined(this.accounts[0].taux));


}

def(b:any) : boolean{
  return isUndefined(b);
} 

select(comppptes : Compte){
  this.ccompte.emit(comppptes);
}

public highlightRow(p) {
  this.selectedName = p.id;
}

}
