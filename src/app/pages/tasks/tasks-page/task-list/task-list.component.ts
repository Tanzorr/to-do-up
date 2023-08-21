import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedService } from "../../../../libs/shared-api/shared.service";
import { Observable, of } from "rxjs";
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';
import {TaskListService} from "./task-list-services/task-list.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  tasks$: Observable<any>;

  constructor(private _sharedService: SharedService, private _taskService: TaskListService) {
    this._taskService.getTasks();
    this.tasks$ = this._taskService.tasks$;
  }
  deleteTask(taskId: string) {
    this._sharedService.deleteTask(taskId).then(() => {
      console.log('Task deleted')
    });
  }
}
