import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Task } from './entitis/Tasks';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private _firestore: Firestore) {}

  getTasks(): Observable<Task[]> {
    let tasksCollections = collection(this._firestore, 'tasks');

    const tasks = collectionData(tasksCollections, { idField: 'id' });

    return tasks as Observable<Task[]>;
  }

  getSingleItem(taskId: string): Observable<Task> {
    const docRef = getDoc(doc(this._firestore, 'tasks/', taskId));

    return from(
      docRef.then((doc) => {
        return doc.data();
      })
    ) as Observable<Task>;
  }

  updateTask(task: any): void {
    let data = task;
    let docRef = doc(this._firestore, 'tasks/', task.id);

    updateDoc(docRef, data);
  }

  addTask(task: any) {
    let data = task;
    let tasksCollections = collection(this._firestore, 'tasks');

    return from(addDoc(tasksCollections, data));
  }

  deleteTask(taskId: string) {
    // @ts-ignore
    let docRef = doc(this._firestore, 'tasks/', taskId);
    return deleteDoc(docRef);
  }
}
