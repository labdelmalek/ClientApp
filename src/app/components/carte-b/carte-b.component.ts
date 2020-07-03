import { Component, OnInit, Input } from '@angular/core';
import { CarteB } from 'src/app/Models/Carteb.Model';
import { Client } from 'src/app/Models/Compte.Model';
import { CartebserviceService } from 'src/app/services/cartebservice.service';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-carte-b',
  templateUrl: './carte-b.component.html',
  styleUrls: ['./carte-b.component.css']
})
export class CarteBComponent implements OnInit {

  @Input() carte : CarteB;
  @Input() owner : Client;
  active : Boolean;
  n1:string
  n2:string
  n3:string
  n4:String
  subscriptions: SubscriptionLike[] = [];

  constructor(private carteService : CartebserviceService) { }

  ngOnInit() {
    this.active=this.carte.status;
     this.n1=this.carte.numcarte.toString().substring(0,4);
     this.n2=this.carte.numcarte.toString().substring(4,8);
     this.n3=this.carte.numcarte.toString().substring(8,12);
     this.n4=this.carte.numcarte.toString().substring(12,16);
     console.log(this.carte);
  }

  activerCarte(){
    this.subscriptions.push(this.carteService.activerCarte(this.carte.id).subscribe(res=>{
  if(res != -1){
    console.log(res);
    alert("Carte activée avec success");

    this.active = true;
  }
  else{
    alert("carte inexistance, veuillez consulter votre agence")
  }
}))

  }
  desactiverCarte(){
    this.subscriptions.push(this.carteService.desasctiverCarte(this.carte.id).subscribe(res=>{
    if(res != -1){
      console.log(res);
      alert("Carte désactivée avec success");

      this.active = false;
    }
    else{
      alert("carte inexistance, veuillez consulter votre agence")
    }
  }))
}
ngOnDestroy() {
  this.subscriptions.forEach(
    (subscription) => subscription.unsubscribe());
}

}