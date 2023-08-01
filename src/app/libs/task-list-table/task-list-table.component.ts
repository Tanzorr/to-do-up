import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Task } from '../shared-api/entitis/Tasks';
import { Observable } from "rxjs";
import { TaskListComponent } from "../../pages/tasks/task-list/task-list.component";

@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['./task-list-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListTableComponent {
  displayedColumns: string[] = ['title', 'description', 'actions'];
  dataSource: Task[] = [];
  @Input() tasks: Task[] = [];
  @Output() deleteTask: EventEmitter<string> = new EventEmitter<string>()

  delete(taskId: string) {
    this.deleteTask.emit(taskId);
  }
}