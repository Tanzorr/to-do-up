import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TasksPageService } from './services/tasks-page.service';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageComponent implements OnInit, OnDestroy {
  search$: Observable<string> | undefined;
  searchControlName: FormControlName | undefined;
  private _destroyedSubject = new Subject<void>();

  constructor(private _tasksPageService: TasksPageService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._destroyedSubject.next();
    this._destroyedSubject.complete();
  }

  onSearch(search: string): void {
    this._tasksPageService.search(search);
  }
}
