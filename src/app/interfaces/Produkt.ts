import { AngularFirestore } from '@angular/fire/firestore';

export class Produkt {
    ProduktID: string;
    AnbieterID: string;
    Einheit: string;
    Füllmenge: number;
    GesamtMenge: number;
    MHD: Date;
    Name: string;
    Preis: number;

    constructor(
        ProduktID: string,
        AnbieterID: string, 
        Einheit: string, 
        Füllmenge: number, 
        GesamtMenge: number, 
        MHD: Date, Name: string,
        Preis: number) {
            this.ProduktID = ProduktID;
            this.AnbieterID = AnbieterID;
            this.Einheit = Einheit;
            this.Füllmenge = Füllmenge;
            this.GesamtMenge = GesamtMenge;
            this.MHD = MHD;
            this.Name = Name;
            this.Preis = Preis;
         }
}