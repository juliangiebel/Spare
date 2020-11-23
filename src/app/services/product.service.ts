import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produkt } from '../interfaces/Produkt';
import * as firebaseS from 'firebase';

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

          console.log(new Date(produkt.MHD['_seconds'] * 1000));
          produkt.MHD =  new Date(produktDoc.data()['MHD']['seconds'] * 1000);
          resolve(produkt);
        }
      );
    });
  }

  getAllData() {
    // return new Promise(async (resovle, reject) => {
      const produktList = new Array<Produkt>();

      this.firebase.collection<any>(this.PRODUKTECOLLECTION).ref.get().then(async snapshot => {
        snapshot.forEach( async doc => {
          const data = doc.data();
          console.log('Produkt: ', data.Name);

          const produkt: Produkt = {
            ProduktID: doc.id,
            AnbieterID: data.AnbieterID,
            Einheit: data.Einheit,
            Fuellmenge: data.Füllmenge,
            GesamtMenge: data.GesamtMenge,
            MHD: new Date(data.MHD['seconds'] * 1000),
            Name: data.Name,
            Preis: data.Preis
          };
          
          console.log(produkt.MHD);
          produktList.push(produkt);
        });
      });
      return produktList;
  }

  getAllDataCate(cate: string){

      if (cate === 'alles'){
        return this.getAllData();
      }
      const produktList = new Array<Produkt>();

      this.firebase.collection<any>(this.PRODUKTECOLLECTION, ref =>
        ref.where('Kategorie', '==', cate)).ref.get().then(
          async snapshot => {
          snapshot.forEach( async doc => {
            const data = doc.data();
            console.log('Produkt: ', data.Name );

            const produkt: Produkt = {
              ProduktID: doc.id,
              AnbieterID: data.AnbieterID,
              Einheit: data.Einheit,
              Fuellmenge: data.Füllmenge,
              GesamtMenge: data.GesamtMenge,
              MHD: new Date(data.MHD['seconds'] * 1000),
              Name: data.Name,
              Preis: data.Preis
            };
            produktList.push(produkt);
        });
      });
      return produktList;
  }

  convertMinutesToHours(min: number): string{
    const hours = Math.floor(min / 60);
    const minutes = Math.floor(min % 60);
    if (hours === 0){
      return minutes + ' min.';
    }
    return hours + ' Std. ' + minutes + ' Min.';
  }
}
