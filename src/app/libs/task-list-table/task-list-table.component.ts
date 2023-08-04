import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Task } from '../shared-api/entitis/Tasks';


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
