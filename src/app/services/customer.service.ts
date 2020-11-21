import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { rejects } from 'assert';
import { Observable } from 'rxjs';
import { Kunde } from '../interfaces/Kunde';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  KUNDENCOLLECTION = 'Kunden';
  // userDoc;

  constructor(private firebase: AngularFirestore) { }

  // getKunden(id: string): Observable<Kunde> {
  //   return this.firebase.collection(this.KUNDENCOLLECTION).doc<Kunde>(id).get();
  // }

  getKunde(id: string): Promise<Kunde> {
    return new Promise(async (resolve, reject) => {
      this.firebase.collection(this.KUNDENCOLLECTION).doc(id).ref.get().then(
        kundenDoc => {
          const kunde = kundenDoc.data() as Kunde;
          resolve(kunde);
        }
      );
    });
  }

  // new kunden mit .push erstellen
  setKunden(kunde: Kunde){
    this.firebase.collection(this.KUNDENCOLLECTION).doc(kunde.ID)
    .set({kunde})
    .catch(err => {
      console.log('Error Set User', err);
    });
  }

  getKundeByEmail(email: string) {
    return new Promise(async (resolve, rejects) => {
      // this.firebase.collection<any>(this.KUNDENCOLLECTION, ref => 
        // ref.where('Email', '==', email)).get().then(
        //   kundenDoc => {
        //     const kunde = kundenDoc.data() as Kunde;
        //     resolve(kunde);
        //   }
        // );
    });
  }
}
