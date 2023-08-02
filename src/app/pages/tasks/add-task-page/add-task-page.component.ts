import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedService } from "../../../libs/shared-api/shared.service";
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskPageComponent {
  constructor(private _sharedService: SharedService) {
  }

  addTask(task: Partial<Task>) {
    this._sharedService.addTask(task).then(() => {
    });
  }
}
