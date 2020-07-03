import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requestcb } from '../Models/Requestcb';
import { Observable } from 'rxjs';
import { host } from './transaction-service.service';

@Injectable({
  providedIn: 'root'
})
export class RequestCarteService {
 
  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post(host+"requestCartCredit/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete(host+"requestCartCredit/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get(host+"requestCartCredit/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put(host+"requestCartCredit/terminer/"+vari,data)
  }
  // a revoir
  public voircartes(vari) : Observable<Array<Requestcb>>{
    return this.httpClient.get<Array<Requestcb>>(host+"requestCartCredit/ByClient/"+vari)
  }
} 
