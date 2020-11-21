export class Bestellung {
    ID: string;
    KundenID: string;
    Produkte: Array<string>;
    Preis: number;
    Menge: number;

    constructor(ID: string, KundenID: string, Produkte: Array<string>, Preis: number, Menge: number) {
        this.ID = ID;
        this.KundenID = KundenID;
        this.Menge = Menge;
        this.Preis = Preis;
        this.Produkte = Produkte;
    }
}