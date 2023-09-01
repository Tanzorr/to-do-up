import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Task } from '../../../libs/shared-api/entitis/Tasks';
import { BreadcrumbInterface } from '../../../libs/ui/breadcrub/breadcrumb.interface';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../libs/shared-api/shared.service';
import { Observable } from 'rxjs';
import { EditTaskPageService } from './services/edit-task-page.service';

const breadcrumbs: BreadcrumbInterface[] = [
  {
    label: 'Tasks',
    path: '/app/tasks',
  },
  {
    label: 'Edit Task',
  },
];

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTaskPageComponent implements OnInit {
  taskID: string = '';
  task$: Observable<Task> | undefined;
  breadcrumbs = breadcrumbs;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _sharedService: SharedService,
    private _editTaskPageService: EditTaskPageService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.taskID = params['id'];
    });
    if (this.taskID !== '') {
      // @ts-ignore
      this.task$ = this._sharedService.getSingleItem(this.taskID);
    }
  }

  save(task: Task): void {
    console.log({ task });
    const updatedTask = {
      ...task,
      id: this.taskID,
    };
    this._sharedService.updateTask(updatedTask);
  }
}
