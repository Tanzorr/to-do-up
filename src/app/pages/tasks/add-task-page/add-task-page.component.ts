import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedService } from '../../../libs/shared-api/shared.service';
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';
import { BreadcrumbInterface } from '../../../libs/ui/breadcrub/breadcrumb.interface';
import { Router } from '@angular/router';
import { AddTaskPageService } from './services/add-task-page.service';

const breadcrumbs: BreadcrumbInterface[] = [
  {
    label: 'Tasks',
    path: '/app/tasks',
  },
  {
    label: 'Add Task',
  },
];

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskPageComponent {
  breadcrumbs = breadcrumbs;

  constructor(
    private _sharedService: SharedService,
    private _addTaskPageService: AddTaskPageService,
    private _router: Router
  ) {}

  addTask(task: Task) {
    this._addTaskPageService.addTask(task);
    // this._sharedService.addTask(task).subscribe(
    //   (res) => {
    //     if(res.id){
    //       this._router.navigate(['/app/tasks', res.id]).then(r => console.log(r));
    //     }
    //   }
    // );
  }
}
