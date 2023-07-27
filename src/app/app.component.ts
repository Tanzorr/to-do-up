import { Component } from '@angular/core';
import { SharedService } from "./libs/shared-api/shared.service";
import { DocumentData } from "@angular/fire/compat/firestore";

export interface Task {
  id?: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  tasks: any[] = [];


  constructor(private _sharedService: SharedService) {
  }

  refreshTasks() {
    this._sharedService.getTasks().subscribe(data => {
      console.log({ data })
      this.tasks = data;
    });
  }

  ngOnInit() {
    this.refreshTasks();
  }

  addTask(task: Task) {
    this._sharedService.addTask(task).then(() => {
      this.refreshTasks();
    });
  }

  deleteTask(taskId: string) {
    this._sharedService.deleteTask(taskId).then(() => {
      this.refreshTasks();
    });
  }
}
