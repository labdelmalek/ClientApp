import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  // public epargne:Compte;
  // public cheque:Compte;
  accounts : Array<Compte>;
  transaction : Array<Transaction>;
  transactiont1 : Array<Transaction>;
  subscriptions: SubscriptionLike[] = [];

   values :Array<number> = new Array<number>() ;
   dates :Array<string> = new Array<string>() ;
   balance1 : number = 0;
   isDataAvailable : boolean = false;
 public isAuthenticated:boolean;

 constructor(private clientsservice:CompteService,private router:Router,private routeactuel:ActivatedRoute,
   private tranService : TransactionServiceService, private _authservice : AuthenticationService) { }

 ngOnInit() {
  this.isDataAvailable  = false;
   console.log("called")
  if(!this._authservice.isLoggedIn()){
    this.router.navigate(['/login']); 
  }
   this.accounts = new Array<Compte>();
   this.transaction = new Array<Transaction>();
   this.transactiont1 = new Array<Transaction>();

   if(this._authservice.isLoggedIn()==true){
    this.subscriptions.push(this.clientsservice.Getcheque(localStorage.getItem("id"))
   .subscribe(data=>{
     
     console.log(data)
     if(data != null){
     for(let c of data){
       if(!c.is_suspended){
        this.accounts.push(c);
        this.balance1 = this.balance1 + c.balance;
      }
     }}
     this.subscriptions.push(this.clientsservice.Getepargne(localStorage.getItem("id"))
 .subscribe(data=>{
  if(data != null){
   for(let c of data){
    if(!c.is_suspended){

     this.accounts.push(c);
     this.balance1 = this.balance1 + c.balance;
    }
   }}
   this.fillTransactions();
       }));
   
   },err=>{
     console.log(err);
   }));
 
  }}

 

  
fillTransactions(){
  for(let i of this.accounts){
    this.subscriptions.push(this.tranService.Gettransactionreceiver(i.id)
    .subscribe(response=>{
      if(response != null){
      for(let t of response){
        t.is_sender=false;
        this.transaction.push(t); 
      }
      }
     }));
     this.subscriptions.push(this.tranService.Gettransactionsender(i.id).subscribe(response=>{
      if(response != null){
      for(let t of response){
        t.is_sender=true;
        this.transaction.push(t);
        this.transactiont1.push(t);
        
       
       }
       if(i.id === this.accounts[this.accounts.length-1].id){
        console.log("last one")
        this.sortAndFill();
      }
     }
     
    }));
   
   
  }
      }
sortAndFill(){
  this.transaction = this.transaction.sort((a, b) => {
    return <any>new Date(b.date) - <any>new Date(a.date);
  });
  this.transactiont1 = this.transactiont1.sort((a, b) => {
    return <any>new Date(a.date) - <any>new Date(b.date);
  });
let k=0;
        this.isDataAvailable = true;
         for(let s of this.transactiont1)
      {
          if((new Date(s.date)).getDate() == (new Date(this.dates[this.dates.length-1]).getDate())){
            if((new Date(s.date)).getUTCMonth() == (new Date(this.dates[this.dates.length-1]).getUTCMonth())){
              if((new Date(s.date)).getUTCFullYear() == (new Date(this.dates[this.dates.length-1]).getUTCFullYear())){
                this.values[this.values.length-1]=(this.values[this.values.length-1]+ s.somme);
                k--;
              }
              else{
                this.dates.push(new Date((s.date)).toLocaleDateString());
                this.values.push(s.somme);
              }
            }
            else{
              this.dates.push(new Date((s.date)).toLocaleDateString());
              this.values.push(s.somme);
            }
          } 
        else 
        {
       this.dates.push(new Date((s.date)).toLocaleDateString());
       this.values.push(s.somme);
        }
        k++;
        if(k > 29)
            break;
       }
       console.log(this.dates);
       console.log(this.values);

    
}
ngOnDestroy() {
  this.subscriptions.forEach(
    (subscription) => subscription.unsubscribe());
}


}
