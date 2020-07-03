import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation-credit',
  templateUrl: './simulation-credit.component.html',
  styleUrls: ['./simulation-credit.component.css']
})
export class SimulationCreditComponent implements OnInit {

  Montant : number = 5000 ;
  Taux : number = 5;
  Duree : number = 6;
  mensualite ;

  constructor() {
   }

  ngOnInit(): void {
    this.CalculerMensualité();
  }
  changeMontant(value){
    this.Montant= value;
    this.CalculerMensualité();
  }
  changeTaux(value){
    this.Taux=value;
    this.CalculerMensualité();
  }
  ChangeDuree(value){
    this.Duree= value;
    this.CalculerMensualité();
  }
  CalculerMensualité(){
    this.mensualite=((this.Montant*(this.Taux/1200))/(1-Math.pow(1+(this.Taux/1200), -this.Duree))).toFixed(2);
  }

}
