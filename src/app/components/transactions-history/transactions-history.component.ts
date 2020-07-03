import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Compte, Client } from 'src/app/Models/Compte.Model';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { CartebserviceService } from 'src/app/services/cartebservice.service';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.css']
})
export class TransactionsHistoryComponent implements OnInit {
  compte : Compte;
  id:any;
  Cheques : Array<Compte> = new Array();
  Epargnes : Array<Compte> = new Array();
  Epargne : boolean = true;
  selected : Boolean = false;
  currentAccount : Compte = null;
  transaction : Array<Transaction>;
  transactionCmp : Array<Transaction>;
  transactionssCmp : Array<Transaction>;
  containsCarte : boolean = false;
  subscriptions: SubscriptionLike[] = [];

  constructor(private compteServ : CompteService, private _clientService : ClientDataService
    , private _authSerivce : AuthenticationService
    ,private _router :Router,
    private tranService : TransactionServiceService,
    private cbancaireService : CartebserviceService) { }

  ngOnInit(): void {

    if(!this._authSerivce.isLoggedIn()){
      this._router.navigate(['/login']); 
    }
    else{    
    this.id=localStorage.getItem("id");
    this.subscriptions.push(this.compteServ.Getallepargne(this.id)
    .subscribe((data : Array<Compte>)=>{
      if (data != null)
      for (let i of data){
        if(!i.is_suspended)
          this.Epargnes.push(i);
      }
    }));
    this.subscriptions.push(this.compteServ.Getallcheque(this.id)
    .subscribe((data : Array<Compte>)=>{
      if (data != null)
      for (let i of data){
        if(!i.is_suspended)
          this.Cheques.push(i);
      }
    }));
  }
  }
  
  voircheques(){
    this.Epargne=false;
  }

  voirepargnes(){ 
    this.Epargne=true;
  }

  oncompte(comptee : Compte){
    this.transactionssCmp = new Array<Transaction>();
    this.transactionCmp = new Array<Transaction>();
    console.log("called")
    this.selected=true;
   this.currentAccount=comptee;
   this.containsCarte=false;

   this.transaction= new Array<Transaction>();
   this.subscriptions.push(this.tranService.getAllTransactions(this.currentAccount.id)
    .subscribe(response=>{
    
      if(response != null){
      for(let t of response){
        if (t.sender != null ){
          if (t.sender.id == this.currentAccount.id){
          t.is_sender=true;
        }
        else {
          t.is_sender = false;
        }
        }
        else{
          t.is_sender=false;
        }
       if(t.type == "transaction" ){
         this.transactionCmp.push(t);
       }
       else{
         this.transactionssCmp.push(t);
       }
        
      }
      this.transactionCmp.sort((a, b) => (a.date > b.date ? -1 : 1));
      this.transactionssCmp.sort((a, b) => (a.date > b.date ? -1 : 1));
      console.log("all compte")
      console.log(this.transactionCmp);
      console.log("all ss compte")
      console.log(this.transactionssCmp);
      }
     }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
  }


}
