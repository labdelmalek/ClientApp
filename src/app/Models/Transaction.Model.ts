import { Compte } from './Compte.Model';


    export class Message {
        id: number;
        country: string;
        message: string;
        date: string;
    }

    export class Transaction {
        id_transaction: number;
        sender: Compte;
        receiver: Compte;
        somme: number;
        date: Date;
        transactionStatus: number;
        type  : String ;
        person : string;
        is_sender : boolean;
    }
