import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private codeservice:AuthenticationService,private router:Router){}
  canActivate():boolean{
    if((this.codeservice.isLoggedIn())){
      console.log('tooooo')
        return true;
    }
    else{
      console.log('tee')
      this.router.navigate(['']);
      return false;
    }
   
  }

}
