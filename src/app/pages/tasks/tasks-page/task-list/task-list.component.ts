import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedService } from "../../../../libs/shared-api/shared.service";
import { Observable, of } from "rxjs";
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;

  constructor(private _sharedService: SharedService) {
    this.tasks$ = this._sharedService.getTasks();
  }
  deleteTask(taskId: string) {
    this._sharedService.deleteTask(taskId).then(() => {
      console.log('Task deleted')
    });
  }
}
