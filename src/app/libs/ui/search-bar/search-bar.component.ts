import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { debounceTime, Observable, Subject, takeUntil } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBarComponent),
      multi: true,
    },
  ],
})
export class SearchBarComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  value = '';
  disabled = false;
  @Input() placeholder = 'Search';
  @Input() debounceDueTime = 500;
  @HostBinding('class.search-bar') className = true;
  private _destroyedSubject = new Subject<void>();
  private _enteredValueSubject = new Subject<string>();
  enteredValue$: Observable<string> = this._enteredValueSubject.asObservable();

  constructor(private readonly _cdr: ChangeDetectorRef) {}

  onChangeFn: (value: string) => void = () => {};

  onTouchedFn: (touched: boolean) => void = () => {};

  ngOnInit(): void {
    this.enteredValue$
      .pipe(
        takeUntil(this._destroyedSubject.asObservable()),
        debounceTime(this.debounceDueTime)
      )
      .subscribe((value: string) => {
        this.onChangeFn(value);
      });
  }

  ngOnDestroy(): void {
    this._destroyedSubject.next();
    this._destroyedSubject.complete();
    this._enteredValueSubject.complete();
  }

  onChange(event: Event): void {
    this._enteredValueSubject.next((event.target as HTMLInputElement).value);
  }

  writeValue(value: string): void {
    this.value = value ?? '';
    this._cdr.markForCheck();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: (touched: boolean) => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
