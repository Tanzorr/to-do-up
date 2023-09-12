import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksPageService {
  constructor() {}

  search(search: string): void {
    console.log('search', search);
  }
}
