import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produkt } from '../interfaces/Produkt';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PRODUKTECOLLECTION = 'Produkte';

  constructor(private firebase: AngularFirestore) { }

  getData(id: string): Promise<Produkt>{
    return new Promise(async (resolve, reject) => {
      this.firebase.collection(this.PRODUKTECOLLECTION).doc(id).ref.get().then(
        produktDoc => {
          const produkt = produktDoc.data() as Produkt;
          resolve(produkt);
        }
      );
    });
  }

  getAllData() {
    // return new Promise(async (resovle, reject) => {

      this.firebase.collection<any>(this.PRODUKTECOLLECTION).ref.get().then(async snapshot => {
        snapshot.forEach( async doc => {
          const data = doc.data();
          const produkt: Produkt = {
            ProduktID: doc.id,
            AnbieterID: data.AnbieterID,
            Einheit: data.Einheit,
            Füllmenge: data.Füllmenge,
            GesamtMenge: data.GesamtMenge,
            MHD: data.MHD,
            Name: data.Name,
            Preis: data.Preis
          };
        });
      });
  }
}
