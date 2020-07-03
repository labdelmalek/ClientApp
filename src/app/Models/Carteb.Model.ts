import { Compte } from './Compte.Model';

export class CarteB{
    id : Number;
    nom_carte : string;
    numcarte : string;
    expiration : Date;
    status : boolean;
    cvv : string;
    compte : Compte;
    mdp : number;
}