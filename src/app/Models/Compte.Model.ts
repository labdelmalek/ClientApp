import { Transaction } from './Transaction.Model';
import { Requestcb } from './Requestcb';

export class Message {
    id: number;
    country: string;
    message: string;
    date: string;
}

export class Role {
    id: number;
    roleName: string;
}

export class Client {
    id: number;
    firstName: string;
    lastName: string;
    adresse: string;
    cin: string;
    phone: string;
    dateNaissance: Date;
    joiningDate: Date;
    email: string;
    password: string;
    messages: Message[];
    epargne: any[];
    cheque: any[];
    is_suspended: boolean;
    role: Role;
}


export class TransactionR {
    id_transaction: number;
    somme: number;
    date: Date;
    transactionStatus: number;
}

export class Compte {
    id: number;
    client: Client;
    numcompte: string;
    numinternational: string;
    balance: number;
    creation_date: Date;
    is_suspended: boolean;
    transactionS: Transaction[];
    transactionR: TransactionR[];
    taux: number;
    dernier_interet: Date;
    frais : number;
    dernier_frais :  Date;
    cartecredit : Array<Requestcb>
    rib:string
}