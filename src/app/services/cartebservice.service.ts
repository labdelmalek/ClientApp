import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CarteB } from '../Models/Carteb.Model';

@Injectable({
  providedIn: 'root'
})
export class CartebserviceService {
  constructor(private _http: HttpClient,private router : Router) { }
  baseUrl :string= "https://bank-app-api.herokuapp.com/cbancaire/";

  public  getCartesOfAccount(id : Number) : any{
    return this._http.get<Array<CarteB>>(this.baseUrl+"cartes/"+id)
}
public  activerCarte(id : Number)  {
  return this._http.put(this.baseUrl+"activerCarte/"+id,null)
}
public  desasctiverCarte(id : Number) {
  return this._http.put(this.baseUrl+"bloquerCarte/"+id,null)
}

   }

