import { Component, OnInit, Inject } from '@angular/core';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { Observable, SubscriptionLike } from 'rxjs';
import { Client } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';


export interface DialogData {
  balance:Number;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client$ : Observable<Client>;
  balance : Number = 0;
  editAdresseInd : Boolean = false;
  editEmailInd : Boolean = false;
  editPhoneInd : Boolean = false;
  editPwordInd : Boolean = false;
  subscriptions: SubscriptionLike[] = [];

  newAdresse : string;
  newEmail : string;
  newPhone : string;
  ancienPword : string;
  NouveauPword : string;
  CompteurFail : number = 2;
  ConfirmPword : string;

  constructor(private dataService :ClientDataService, private cmpteService : CompteService,
     private authentication :  AuthenticationService, public dialog: MatDialog) { }

  ngOnInit() { 
    this.client$=this.dataService.getClient();
    this.subscriptions.push(this.cmpteService.Getallcheque(localStorage.getItem("id")).subscribe(response =>{
      for(let s of response){
        this.balance=this.balance+s.balance;
      }
    }));
    this.subscriptions.push(this.cmpteService.Getallepargne(localStorage.getItem("id")).subscribe(response =>{
      for(let s of response){
        this.balance=this.balance+s.balance;
      }
    }))
    }
    
    editAddress(){
      this.editAdresseInd=true;
    }
    editEmail(){
      this.editEmailInd=true;
    }
    editPhone(){
      this.editPhoneInd=true;
    }
    editPword(){
      this.editPwordInd=true;
    }
    updateAdresse(){
      if(this.newAdresse == undefined){
        alert("Veuillez remplir le champ adresse correctement")
      }
      else {
        this.subscriptions.push(this.dataService.updateadresse(this.newAdresse).subscribe((res)=> console.log(res)));
        window.location.reload();
      }
    }
    updateEmail(){
      if(this.newEmail == undefined){
        alert("Veuillez remplir le champ Email correctement")
      }
      else {
        this.subscriptions.push(this.dataService.updateEmail(this.newEmail).subscribe((res)=> console.log(res)));
        this.authentication.Logout();
        window.location.reload();
      }
    }
    updatePhone(){
      if(this.newPhone == undefined || this.newPhone==""){
        alert("Veuillez remplir le champ Nouveau numero correctement")
      }
      else {
        this.subscriptions.push(this.dataService.updatePhone(this.newPhone).subscribe((res)=> console.log(res)));
        window.location.reload();
      }
    }
    updatePword(){
      let k :string;
      this.subscriptions.push(this.dataService.verify(this.ancienPword).subscribe(res=>{
          if(res ==1){
            this.updatePwordpart2(1);
          }
          else{
            this.updatePwordpart2(2);
          }

      }))
      
    }
    updatePwordpart2(valeur){
      if (valeur ==1){
        console.log("match")
        if(this.NouveauPword === this.ConfirmPword){
          this.subscriptions.push(this.dataService.updatePword(this.NouveauPword).subscribe((res)=> console.log(res)));
          this.authentication.Logout();
          window.location.reload();
        }
        else{
          alert("Retaper les nouveaux mot de passe")
        }
      } 
      else{
        if(this.CompteurFail==0){
          this.authentication.Logout();
          window.location.reload();
        }
        else{
          alert("ancien mot de passe incorrect, il vous reste "+this.CompteurFail+" essaies");
        }
        this.CompteurFail--;

      }
    }


    openDialog() {
      const dialogRef = this.dialog.open(DialogDataExampleDialog, {
       
        data: {balance: this.balance}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      });
    }
    ngOnDestroy() {
      this.subscriptions.forEach(
        (subscription) => subscription.unsubscribe());
    }
    

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogDataExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
