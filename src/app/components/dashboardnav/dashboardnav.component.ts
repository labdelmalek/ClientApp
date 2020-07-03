import { Component, OnInit, Input } from '@angular/core';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { CompteService } from 'src/app/services/compte-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-dashboardnav',
  templateUrl: './dashboardnav.component.html',
  styleUrls: ['./dashboardnav.component.css']
})
export class DashboardnavComponent implements OnInit {

  @Input() balance1 : number;
  isAuthenticated : boolean;
  firstname : string;
  subscriptions: SubscriptionLike[] = [];

  
currentUser:string='';
vall: string;
  constructor(private _authService : AuthenticationService, private client : ClientDataService, private account : CompteService) {
    this.vall=localStorage.getItem("id");
 
  }

  ngOnInit() {
    this.isAuthenticated=this._authService.isLoggedIn();
    if(this.isAuthenticated)
    {
      this.subscriptions.push(this.client.getClient().subscribe(response=>{
        console.log(response);
        this.firstname = response.firstName;

      }));
    }
console.log(this.balance1);
  }



  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
  }

}
