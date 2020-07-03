import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

import { Router } from '@angular/router';
import { PassDataService } from '../../services/pass-data.service';
import { CompteService } from 'src/app/services/compte-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() myEvent=new EventEmitter<boolean>()
  @Output() myEvent2=new EventEmitter()


  isAuthenticated : boolean=false;
  clientname : string;
  id:number=1
  balance : Number = 0;

  iscc:boolean=false
  width:number = window.innerWidth;
  @Input() inputSideNav
  




  constructor(private authService : AuthenticationService,private router:Router,private cmpteService : CompteService,public passDataService:PassDataService) {
  passDataService.columnVars=false
  }


  ngOnInit(): void {

    this.isAuthenticated=this.authService.isLoggedIn();
    if(this.isAuthenticated)
    {
      this.authService.getAdminDetail().subscribe(response => {

          this.clientname=response.firstName;
      });
    


    this.cmpteService.Getallcheque(localStorage.getItem("id")).subscribe(response =>{
      if(response != null){

      for(let s of response){
        
        this.balance=this.balance+s.balance;
      }}
    });
    this.cmpteService.Getallepargne(localStorage.getItem("id")).subscribe(response =>{
      if(response != null){

      for(let s of response){
        this.balance=this.balance+s.balance;
      }
    }
    })
  }
  }




  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  clickCb(){
    this.myEvent.emit(true);

  }

  clickCheck(){
    this.myEvent2.emit(true);



  }

  logout(){

      this.authService.Logout();
     // this.router.navigate(['login']);
      window.location.reload();
     }

     toggle(){
      this.inputSideNav.toggle();
    }


}
