import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedService } from '../../../../libs/shared-api/shared.service';
import { Observable } from 'rxjs';
import { TaskListService } from './services/task-list.service';
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;

  constructor(
    private _sharedService: SharedService,
    private _taskService: TaskListService
  ) {
    this._taskService.getTasks();
    this.tasks$ = this._taskService.tasks$;
  }

  deleteTask(taskId: string) {
    this._taskService.deleteTask(taskId);
    // this._sharedService.deleteTask(taskId).then(() => {
    //   console.log('Task deleted')
    // })
  }
}
