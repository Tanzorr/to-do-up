import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Task } from '../../../libs/shared-api/entitis/Tasks';
import { Observable } from 'rxjs';
import { BreadcrumbInterface } from '../../../libs/ui/breadcrub/breadcrumb.interface';
import { TaskPageService } from './services/task-page.service';

const breadcrumbs: BreadcrumbInterface[] = [
  {
    label: 'Tasks',
    path: '/app/tasks',
  },
  {
    label: 'Task',
  },
];

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPageComponent implements OnInit {
  breadcrumbs: BreadcrumbInterface[] = breadcrumbs;
  taskID: string = '';
  task$: Observable<Task> | undefined;

  constructor(private _taskService: TaskPageService) {}

  ngOnInit(): void {
    this._taskService.getTask(this.taskID);
    this.task$ = this._taskService.task$;
  }
}
