import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{requestcc} from '../Models/requestcc';
import {compteCheque} from '../Models/compteCheque';
import { Observable } from 'rxjs';
import { host } from './transaction-service.service';

@Injectable({
  providedIn: 'root'
})
export class RequestChequeService {

  constructor(private httpClient:HttpClient) { } 

  public passercarte(vari){
    return this.httpClient.put(host+"requestCC/saveWithAccount/"+vari,null)
  }

  public annulercarte(vari){
    return this.httpClient.delete(host+"requestCC/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get(host+"requestCC/"+vari)
  }
  public updatecarte(vari,data){ 
    return this.httpClient.put(host+"requestCC/update/"+vari,data)
  }
  public voircartes(vari) : Observable<requestcc[]>{
    return this.httpClient.get<requestcc[]>(host+"requestCC/ByClient/"+vari)
  }

  public getCompteCheckByClient(vari){
    return this.httpClient.get(host+"cheque/comptes/client/"+vari)
  } 

 


}
