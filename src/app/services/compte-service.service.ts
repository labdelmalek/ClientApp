import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../Models/Compte.Model';
import { host } from './transaction-service.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  public  Getcheque(vari): Observable<Array<Compte>>{
    let id = localStorage.getItem("id");
    return this.httpClient.get<Array<Compte>>(host+"Client/"+id+"/chequecomptes");
  }
  public Getepargne(vari): Observable<Array<Compte>>{
    let id = localStorage.getItem("id");
    return this.httpClient.get<Array<Compte>>(host+"Client/"+id+"/epargnecomptes");
  }
  constructor(private httpClient:HttpClient) { }
  public Getallepargne(vari):any{
    return this.httpClient.get(host+"Client/"+vari+"/epargnecomptes");
  }
  public Getallcheque(vari):any{
    return this.httpClient.get(host+"Client/"+vari+"/chequecomptes");
  }
  public Getepargneid(vari){
    return this.httpClient.get(host+"epargne/"+vari);
  }
  public Getchequeid(vari){
    return this.httpClient.get(host+"cheque/comptes/"+vari);
  }
  public getAccountIdByNA(vari){
    return this.httpClient.get(host+"transaction/idaccount/"+vari);
  }
}

