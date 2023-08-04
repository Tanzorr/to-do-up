import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef,
  HostBinding,
  OnDestroy, Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { FocusMonitor, FocusOrigin } from "@angular/cdk/a11y";

@Component({
  selector: 'a[app-breadcrumb]',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.breadcrumb') className = true;

  constructor(public elementRef: ElementRef,
              public renderer: Renderer2,
              public focusMonitor: FocusMonitor
  ) {
  }

  ngAfterViewInit(): void {
    this.focusMonitor.monitor(this.elementRef, true);
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  focus(origin?: FocusOrigin, options?: FocusOptions): void {
    if (origin) {
      this.focusMonitor.focusVia(this.elementRef.nativeElement, origin, options);
    } else {
      this.elementRef.nativeElement.focus(options);
    }
  }
}
