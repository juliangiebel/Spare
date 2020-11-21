import { Injectable } from '@angular/core';
// import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Test.. Brauchen wir den?
  constructor(private firebase: AngularFirestore) { }

  getData(collection: string, document: string) {
    this.firebase.collection(collection).doc(document);
  }
}
