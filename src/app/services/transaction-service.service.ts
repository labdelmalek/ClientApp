import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Models/Transaction.Model';
import { Observable } from 'rxjs';
export const host:string="https://bank-app-api.herokuapp.com/";
@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private httpClient:HttpClient) { } 
  public Gettransactions(vari){
    return this.httpClient.get(host+"transaction/account/"+vari);
  }
  public Gettransaction(vari){
    return this.httpClient.get(host+"transaction/transactions/"+vari);
  }
  public fairetransaction(receiver,sender,data){
    return this.httpClient.post(host+"transaction/sendTransaction/"+receiver+"/"+sender,data)
  }
  public Gettransactionsender(vari){
    return this.httpClient.get<Array<Transaction>>(host+"transaction/senderAccount/"+vari);
  }
  public Gettransactionreceiver(vari){
    return this.httpClient.get<Array<Transaction>>(host+"transaction/receiverAccount/"+vari);
  }
  public getAllTransactions(vari ) : Observable<Array<Transaction>>{
    return this.httpClient.get<Array<Transaction>>(host+"transaction/transall/"+vari);
  }

}
