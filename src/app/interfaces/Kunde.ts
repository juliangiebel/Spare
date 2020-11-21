import { Adresse } from './Adresse';


export class Kunde {
    ID: string;
    Vorname: string;
    Nachname: string;
    Bestellungen: Array<string>;
    Adresse: Adresse;

    constructor(ID: string, Vorname: string, Nachname: string, Bestellungen: Array<string>, Adresse: Adresse){
        this.ID = ID;
        this.Vorname = Vorname;
        this.Nachname = Nachname;
        this.Bestellungen = Bestellungen;
        this.Adresse = Adresse;
    }
}