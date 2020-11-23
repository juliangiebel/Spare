import { AngularFirestore } from '@angular/fire/firestore';

export class Produkt {
    ProduktID: string;
    AnbieterID: string;
    Einheit: string;
    Fuellmenge?: number;
    GesamtMenge: number;
    MHD: Date;
    Name: string;
    Preis: number;
    Distanz?: number;

    constructor(
        ProduktID: string,
        AnbieterID: string,
        Einheit: string,
        Füllmenge: number,
        GesamtMenge: number,
        MHD: Date, Name: string,
        Preis: number, Distanz?: number) {
            this.ProduktID = ProduktID;
            this.AnbieterID = AnbieterID;
            this.Einheit = Einheit;
            this.Fuellmenge = Füllmenge;
            this.GesamtMenge = GesamtMenge;
            this.MHD = MHD;
            this.Name = Name;
            this.Preis = Preis;
            this.Distanz = Distanz;
         }
}
