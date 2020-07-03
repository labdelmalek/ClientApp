import { Compte } from './Compte.Model';

export class Credit{
    id : number;
	nbmois : number;
	somme : number; 
	taux : number;
	mensualite : number;
	statut : Boolean;
	moisrest : number;
	credit : Compte;
}