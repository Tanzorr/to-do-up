import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Task } from '../../shared-api/entitis/Tasks';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent implements OnChanges {
  form: FormGroup = new FormGroup({});
  @Input() task: Task | null = null;

  @Output() edit: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.task) {
      this.form?.patchValue(this.task);
    }
  }
}
