import { Injectable } from '@angular/core';
import { addDoc, getDoc, collection, collectionData, deleteDoc, doc, Firestore } from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { Task } from "../shared-api/entitis/Tasks";
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _firestore: Firestore) { }

  getTasks(): Observable<Task[]> {
    let tasksCollections = collection(this._firestore, 'tasks');

    const tasks = collectionData(tasksCollections, { idField: 'id' });
    return tasks as Observable<Task[]>;
  }


  getSingleItem(taskId: string): Observable<Task> {
    const docRef = getDoc(doc(this._firestore, 'tasks/', taskId));
    console.log(docRef.then((doc) => { console.log(doc.data()) }));

    return from(docRef.then((doc) => { return doc.data() })) as Observable<Task>;
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
