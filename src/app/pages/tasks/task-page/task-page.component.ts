import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from "../../../libs/shared-api/entitis/Tasks";
import { SharedService } from "../../../libs/shared-api/shared.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbInterface } from "../../../libs/ui/breadcrub/breadcrumb.interface";


const breadcrumbs: BreadcrumbInterface[] = [
  {
    label: 'Tasks',
    path: '/app/tasks'
  },
  {
    label: 'Task',
  }
];

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskPageComponent implements OnInit {
  breadcrumbs: BreadcrumbInterface[] = breadcrumbs;
  taskID: string = '';
  task$: Observable<Task> | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.taskID = params['id'];
    })
    if(this.taskID!=='') {
      // @ts-ignore
      this.task$ = this._sharedService.getSingleItem(this.taskID);
    }
  }
}
