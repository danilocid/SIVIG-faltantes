import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaltantesService {
  constructor(private firestore: AngularFirestore) {}

  //secciones

  getSecciones(): Observable<any> {
    return this.firestore.collection('secciones').snapshotChanges();
  }

  getSeccion(id: string): Observable<any> {
    return this.firestore.collection('secciones').doc(id).snapshotChanges();
  }
}
