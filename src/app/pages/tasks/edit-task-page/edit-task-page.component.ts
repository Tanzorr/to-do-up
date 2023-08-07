import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Task } from "../../../libs/shared-api/entitis/Tasks";
import { BreadcrumbInterface } from "../../../libs/ui/breadcrub/breadcrumb.interface";
import { ActivatedRoute } from "@angular/router";
import { SharedService } from "../../../libs/shared-api/shared.service";
import { Observable } from "rxjs";

const breadcrumbs: BreadcrumbInterface[] = [
  {
    label: 'Tasks',
    path: '/app/tasks'
  },
  {
    label: 'Edit Task',
  }
];


@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTaskPageComponent implements OnInit{
  taskID: string = '';
  task$: Observable<Task> | undefined;
  breadcrumbs = breadcrumbs;

  constructor(private _activatedRoute: ActivatedRoute,
              private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.taskID = params['id'];
    })
    if(this.taskID!=='') {
      // @ts-ignore
      this.task$ = this._sharedService.getSingleItem(this.taskID);
    }
  }
  edit(task: Task): void {
  }
}
