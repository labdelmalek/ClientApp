import { Component, OnInit } from '@angular/core';
import { Compte, Client } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { CartebserviceService } from 'src/app/services/cartebservice.service';
import { CarteB } from 'src/app/Models/Carteb.Model';
import { SubscriptionLike } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  compte : Compte;
  id:any;
  Cheques : Array<Compte> = new Array();
  Epargnes : Array<Compte> = new Array();
  Epargne : boolean = true;
  selected : Boolean = false;
  currentAccount : Compte = null;
  transaction : Array<Transaction>;
  carte : CarteB = null;
  containsCarte : boolean = false;
  owner : Client ;
  subscriptions: SubscriptionLike[] = [];


  constructor(private compteServ : CompteService, private _clientService : ClientDataService
    , private _authSerivce : AuthenticationService
    ,private _router :Router,
    private tranService : TransactionServiceService,
    private cbancaireService : CartebserviceService,
    private clientService : ClientDataService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem("id");
    this.subscriptions.push(this.compteServ.Getallepargne(this.id)
    .subscribe((data : Array<Compte>)=>{
      if(data != null){

      for (let i of data){
        if(!i.is_suspended)
          this.Epargnes.push(i);
      }}
    }));
    this.subscriptions.push(this.compteServ.Getallcheque(this.id)
    .subscribe((data : Array<Compte>)=>{
      if(data != null){
      for (let i of data){
        if(!i.is_suspended)
          this.Cheques.push(i);
      }}
    }));
  
  }
  
  voircheques(){
    this.Epargne=false;
  }

  voirepargnes(){ 
    this.Epargne=true;
  }

  oncompte(comptee : Compte){
    console.log("called")
    this.currentAccount=comptee;
    this.selected=true;
   this.containsCarte=false;

   this.transaction= new Array<Transaction>();
   this.subscriptions.push(this.tranService.Gettransactionreceiver(this.currentAccount.id)
    .subscribe(response=>{
      if(response != null){
      for(let t of response){
        t.is_sender=false;
        this.transaction.push(t); 
      }
      }
     }));
     this.subscriptions.push(this.tranService.Gettransactionsender(this.currentAccount.id)
      .subscribe(response=>{
        if(response != null){
        for(let t of response){
          t.is_sender=true;
          this.transaction.push(t);
        }
      }
      }));
      if(comptee.taux == undefined){
        console.log("requests");
        this.subscriptions.push(this.cbancaireService.getCartesOfAccount(comptee.id).subscribe(response =>{
          if (response != -1 && response != -2){
            console.log(response);

      for (let i of response){
        if (i.status == true || i.status == false ){
          this.carte = new CarteB();
          this.carte=i;
            this.carte.compte=this.currentAccount;
        this.clientService.getClient().subscribe(resp =>{
          this.owner=new Client();
          this.owner=resp;
          this.containsCarte=true;

          console.log(this.owner);

        });
          break;
        }
        this.containsCarte=false;
      }}
    }));}
      }
  
  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
  }
 
}
