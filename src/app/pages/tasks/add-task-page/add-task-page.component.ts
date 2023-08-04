import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedService } from "../../../libs/shared-api/shared.service";
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';
import { BreadcrumbInterface } from "../../../libs/ui/breadcrub/breadcrumb.interface";

const breadcrumbs: BreadcrumbInterface[] = [
  {
    label: 'Tasks',
    path: '/app/tasks'
  },
  {
    label: 'Add Task',
  }
];

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskPageComponent {
  breadcrumbs = breadcrumbs;

  constructor(private _sharedService: SharedService) {
  }

  addTask(task: Partial<Task>) {
    this._sharedService.addTask(task).then(() => {
    });
  }
}
