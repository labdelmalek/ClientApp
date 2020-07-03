import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/Models/Credit.Model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Client } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router } from '@angular/router';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { CreditService } from 'src/app/services/credit.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-mes-credits',
  templateUrl: './mes-credits.component.html',
  styleUrls: ['./mes-credits.component.css']
})
export class MesCreditsComponent implements OnInit {
  credits : Array<Credit>;
  typecompte;
  client : Client ;
  selected : Boolean = false;
  currentCredit : Credit = null;
  subscriptions: SubscriptionLike[] = [];
  currentAccountnumber : string = "";
  constructor( private  _authservice :AuthenticationService ,private compteService : CompteService, private router : Router,
    private clientService :ClientDataService, private creditService : CreditService) { }

  ngOnInit(): void {
    this.client= new Client();
    if(this._authservice.isClientSelected() == false){
      this.router.navigate(['selectClient']);
    }
    else{
      this.subscriptions.push(this.clientService.getClientById(localStorage.getItem('id')).subscribe(res=>{
        let cl : any = res;
        this.client=cl;
        console.log(this.client);
      }))
    this.credits = new Array<Credit>();
    if(this._authservice.isLoggedIn()==true ){
      this.subscriptions.push(this.creditService.getCreditsByClients(localStorage.getItem('id')).subscribe(res =>{
        console.log("print")
        console.log(res)
        if (res == -1){
          console.log("Client non selectionné");
        }
        else {
          for (let f  of res){
            this.credits.push(f);
          }
        }
        console.log(this.credits);
      }))
    }
  }
  }
  oncompte(credit : Credit){
    console.log("called")
    this.selected=true;
   this.currentCredit=credit;
  //  localStorage.setItem("idnouveaucompte",this.currentAccount.numinternational);
  //credit c'est le compte lié aà currentCredit
    this.currentAccountnumber="Compte  : " +this.currentCredit.credit.numinternational;
  }
  oublierclientId(){
    this._authservice.forgetClientId();
    window.location.reload();
  }



}
