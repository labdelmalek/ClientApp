import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { host } from './transaction-service.service';
import { Credit } from '../Models/Credit.Model';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  
  constructor(private httpClient:HttpClient) { }
  public addCredit(idCompte : String, credit : Credit ) {
    return this.httpClient.post(host+"credit/demandecredit/"+idCompte,credit);
  }
  public getCreditsByClients(idCLient : String) : any {
    return this.httpClient.get(host+"credit/client/"+idCLient);
  }
  public payerCredit(idCredit : String) : any {
    return this.httpClient.put(host+"credit/payerrestecredit/"+idCredit,null);
  }
}
