import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { Observable, SubscriptionLike } from 'rxjs';
import { Client } from 'src/app/Models/Compte.Model';
//import * as html2canvas from 'html2canvas';
import { AuthenticationService } from 'src/app/services/authentication.service';
//import jspdf = require('jspdf');

 

@Component({
  selector: 'app-rib',
  templateUrl: './rib.component.html',
  styleUrls: ['./rib.component.css']
})
export class RibComponent implements OnInit {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  accounts : Array<Compte>;
  currentAccount : Compte = null;
   balance1 : number = 0;
   selected : Boolean = false;
   subscriptions: SubscriptionLike[] = [];

 public isAuthenticated:boolean;

 client: Observable<Client>;
 titulaire:string;
 


 constructor(private clientsservice:CompteService,private router:Router,private routeactuel:ActivatedRoute,
   private tranService : TransactionServiceService, private _authservice : AuthenticationService,
   private clientDataService:ClientDataService) { }

 ngOnInit() {
  this.subscriptions.push(this.clientDataService.getClient().subscribe(data => {

    this.titulaire=data.firstName;
    this.titulaire+=" "+data.lastName;

  }
))

  console.log(this.client);

  if(!this._authservice.isLoggedIn()){
    this.router.navigate(['/login']); 
  }
   this.accounts = new Array<Compte>();
   if(this._authservice.isLoggedIn()==true){
 
    this.subscriptions.push(this.clientsservice.Getcheque(localStorage.getItem("id"))
   .subscribe(data=>{
     if(data != null)
     for(let c of data){
       this.accounts.push(c);
        this.balance1 = this.balance1 + c.balance;
     }
   },err=>{
     console.log(err);
   }));
 
   this.subscriptions.push(this.clientsservice.Getepargne(localStorage.getItem("id"))
 .subscribe(data=>{
  if(data != null)
   for(let c of data){
     this.accounts.push(c);
     this.balance1 = this.balance1 + c.balance;
    }
  }));
}




   }
   oncompte(comptee : Compte){
     console.log("called")
     this.selected=true;
    this.currentAccount=comptee;
   }
/*-------------------------------------------------
   public downloadAsPDF() {
    let data = document.getElementById('MyDIv');  
        html2canvas(data).then(canvas => {
          const contentDataURL = canvas.toDataURL('image/png')  
          let pdf = new jspdf('l', 'cm', 'a4'); 
          // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
          pdf.addImage(contentDataURL, 'PNG', 1, 1);  
          pdf.save('Demande rib.pdf');   
        }); 
  }



  /*-------------------------------------------------*/
  /*
  public downloadAsPDF() {
    let doc = new jsPDF('p','pt', 'a3');

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;
   

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      
      width: 300,
      'elementHandlers': specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }

*/

/*
  captureScreen() {
    const pdf = new jsPDF('p', 'mm');
    const promises = $('.pdf-intro').map(function(index, element) {
        return new Promise(function(resolve, reject) {
            html2canvas(element, { allowTaint: true, logging: true })
                .then(function(canvas) {
                    resolve(canvas.toDataURL('image/jpeg', 1.0));
                })
                .catch(function(error) {
                    reject('error in PDF page: ' + index);
                });
        });
    });

    Promise.all(promises).then(function(dataURLS) {
        console.log(dataURLS);
        for (const ind in dataURLS) {
            if (dataURLS.hasOwnProperty(ind)) {
                console.log(ind);
                pdf.addImage(
                    dataURLS[ind],
                    'JPEG',
                    0,
                    0,
                    
                );
                pdf.addPage();
            }
        }
        pdf.save('HTML-Document.pdf');
    });
}
*/

public downloadAsPDF() {
  return xepOnline.Formatter.Format('MyDIv',{render: 'download'});
}
ngOnDestroy() {
  this.subscriptions.forEach(
    (subscription) => subscription.unsubscribe());
}
}
