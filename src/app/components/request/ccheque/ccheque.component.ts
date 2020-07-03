import { Component, OnInit, Input } from '@angular/core';
import { RequestChequeService } from '../../../services/request-cheque.service';
import{requestcc} from '../../../Models/requestcc';



@Component({
  selector: 'app-ccheque',
  templateUrl: './ccheque.component.html',
  styleUrls: ['./ccheque.component.css']
})
export class CchequeComponent implements OnInit {
@Input() myCheckbook
@Input() myChequeAccount


id:number=1
isSelected : Boolean = false;
success : Boolean = false;

request :requestcc
isCheque:boolean=false
selected = '';
cc:requestcc[]


  constructor(private requestChequeService:RequestChequeService ) {

  }

  ngOnInit() {

    var user=localStorage.getItem("id");
    this.id=parseInt(user);


    /*
    sessionStorage.setItem('id', data.id);
    //retrieving from the session
    var data = sessionStorage.getItem('id');
    console.log(data)
    */
    //let user = this.id;
  }

  saveRequest(){
   console.log(this.selected);
    this.requestChequeService.passercarte(this.selected)
      .subscribe(res=>{
        if(res != -1){
          this.success = true;
        }
        else{
          alert("Vous avez déjà une demande de carnet de cheque pour ce compte veuillez choisir in autre")
        }
      },()=> this.isCheque=true);
}

changeSelect(){
 this.isSelected = true;
}
/*
getComterid(par){

    this.requestChequeService.getReceiverByTransac(par).subscribe(
      response => {

        this.receiver = response;
        console.log(this.receiver);
        console.log(response[0].id);
      }
    )

}
*/

getCCByClient(){
  this.requestChequeService.voircartes(this.id).subscribe(
    data => {
      this.cc=data;
      console.log(this.cc);
    }
  )
}



}
