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
    this.firebase.collection<any>(this.PRODUKTECOLLECTION);
  }
}
