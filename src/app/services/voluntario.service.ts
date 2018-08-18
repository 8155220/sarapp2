import { VoluntarioInterface } from './../models/IVoluntario';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';


@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {
  voluntariosCollection: AngularFirestoreCollection<VoluntarioInterface>;
  voluntarios:Observable<VoluntarioInterface[]>;
  voluntarioDoc:AngularFirestoreDocument<VoluntarioInterface>;

  constructor(public afs:AngularFirestore) { 
    this.voluntarios = afs.collection('voluntarios').valueChanges();
  }

  getVoluntarios(){
    return this.voluntarios;
  }
}
