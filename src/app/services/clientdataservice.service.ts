import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/Compte.Model';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  Baseurl : string = "https://bank-app-api.herokuapp.com/Client/";
  constructor(private _http:HttpClient) { }

  
  // getClients() : Observable<Array<Client>>{
  //   return this._http.get<Array<Client>>(this.Baseurl+"Clients");
  // }
  getClient() : Observable<Client>{
    let id = localStorage.getItem("id");
    return this._http.get<Client>(this.Baseurl+id);
  }
  verify(password : string) {
    let id = localStorage.getItem("id");
    return this._http.put(this.Baseurl+"verifyPassword/"+id,password);
  }
  updateadresse(adresse : string) : Observable<Client>{
    let id = localStorage.getItem("id");
    return this._http.put<Client>(this.Baseurl+"updateClientAdresse/"+id,adresse);
  }
  updatePhone(adresse : string) : Observable<Client>{
    let id = localStorage.getItem("id");
    return this._http.put<Client>(this.Baseurl+"updateClientPhone/"+id,adresse);
  }
  updateEmail(adresse : string) : Observable<Client>{
    let id = localStorage.getItem("id");
    return this._http.put<Client>(this.Baseurl+"updateClientEmail/"+id,adresse);
  }
  updatePword(adresse : string) : Observable<Client>{
    let id = localStorage.getItem("id");
    return this._http.put<Client>(this.Baseurl+"updateClientPassword/"+id,adresse);
  }
  resetPassword(email : string){
    return this._http.put(this.Baseurl+"sendpassword/"+email,null);
  }
  public getClientById(id : string) {
    return this._http.get(this.Baseurl+id);
  }
}
