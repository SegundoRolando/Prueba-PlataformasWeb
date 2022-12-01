import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personaCollection: AngularFirestoreCollection<Persona>;

  constructor(private afs:AngularFirestore) { 
    this.personaCollection = afs.collection<Persona>('persona');
  }
  getPersonas(){
    return this.personaCollection.valueChanges();
    }
  
}
