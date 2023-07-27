import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { DocumentData } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _firestore: Firestore) { }

  getTasks(): Observable<DocumentData[]> {
    let tasksCollections = collection(this._firestore, 'tasks');

    return collectionData(tasksCollections, { idField: 'id' });
  }

  addTask(task: any) {
    let data =  task ;
    let tasksCollections = collection(this._firestore, 'tasks');

    return addDoc(tasksCollections, data);
  }

  deleteTask(taskId: string) {
    // @ts-ignore
    let docRef = doc(this._firestore, 'tasks/', taskId);

    return deleteDoc(docRef);
  }
}
