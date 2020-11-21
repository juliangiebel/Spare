import { AngularFirestore } from '@angular/fire/firestore';

export class Produkt {
    AnbieterID: string;
    Einheit: string;
    Füllmenge: number;
    GesamtMenge: number;
    MHD: Date;
    Name: string;
    Preis: number;

    constructor(
        AnbieterID: string, 
        Einheit: string, 
        Füllmenge: number, 
        GesamtMenge: number, 
        MHD: Date, Name: string,
        Preis: number) {
            this.AnbieterID = AnbieterID;
            this.Einheit = Einheit;
            this.Füllmenge = Füllmenge;
            this.GesamtMenge = GesamtMenge;
            this.MHD = MHD;
            this.Name = Name;
            this.Preis = Preis;
         }
}