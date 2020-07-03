import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mouvement-cmpte',
  templateUrl: './mouvement-cmpte.component.html',
  styleUrls: ['./mouvement-cmpte.component.css']
})
export class MouvementCmpteComponent implements OnInit {
  page;
  totalRecords;
  @Input() transaction : Array<Transaction>;
  constructor(private transService: ApiServiceService,private router:Router,private route:ActivatedRoute){
    this.transService=transService;
   
  }
  
accountId:number;

  ngOnInit(){
   
  }
}
