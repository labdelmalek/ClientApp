import { Component, OnInit } from '@angular/core';
import{requestcc} from '../../Models/requestcc';
import { RequestChequeService } from '../../services/request-cheque.service';
import { Router } from '@angular/router';
import { RequestCarteService } from '../../services/request-carte.service';
import { Requestcb } from '../../Models/Requestcb';
import { compteCheque } from '../../Models/compteCheque';
import { Compte } from 'src/app/Models/Compte.Model';
import { SubscriptionLike } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

//CBrequest:requestcb[]
Ccrequest:Array<requestcc>
Cbrequest:Array<Requestcb>
CbClicked:boolean=false
CcClicked:boolean=false
comptesCheques:compteCheque[]
subscriptions: SubscriptionLike[] = [];

id:number=1
  constructor(private requestChequeService:RequestChequeService,
     private router:Router ,private requestCarteService:RequestCarteService
     ,private authenticationService : AuthenticationService ) {

   }

  ngOnInit() {
    var user=localStorage.getItem("id");
    this.id=parseInt(user);

    this.getCompteChequeByClient();
    console.log(this.CcClicked)
    this.getCCByClient();
    this.getCbByClient();
    this.done2;
  }

  getCCByClient(){
    this.Ccrequest = new Array<requestcc>();
    this.subscriptions.push(this.requestChequeService.voircartes(this.id).subscribe(
      data => {

        for (let c of data){
          if (c.closeRequest == false)
          this.Ccrequest.push(c);
        }
        console.log(this.Ccrequest);
      }
    ))
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  done(event){
    console.log(event)
    this.CbClicked=event;
  }
  done2(event){
    console.log(event)
    this.CcClicked=event;
  }


  getCbByClient(){
    this.Cbrequest = new Array<Requestcb>();
    this.subscriptions.push(this.requestCarteService.voircartes(this.id).subscribe(
      response => {
        console.log("carteeeeeeeeeeee")
        console.log(response);

        for (let c of response){
          if (c.closeRequest == false)
          this.Cbrequest.push(c);
          
        }
      },
      err => {

        console.log( err.error.message);

      }
    ))
  }

  getCompteChequeByClient(){
    this.comptesCheques= new Array<Compte>();
    this.subscriptions.push(this.requestChequeService.getCompteCheckByClient(this.id).subscribe(
      (response  : any)=> {
        if(response == -1){
          alert("client not found");
          this.authenticationService.Logout();
        }
        else{
        for(let i of response){
          if(!i.is_suspended)
            this.comptesCheques.push(i);
        console.log(this.Cbrequest);
      }}
      },
      err => {
        console.log( err.error.message);

      }
    ))
  }
  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
  }

}
