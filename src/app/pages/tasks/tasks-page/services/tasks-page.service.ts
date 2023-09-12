import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from '../../../../libs/shared-api/entitis/Tasks';
import { getSearchedValue } from '../../../../store/route/selectors';

@Injectable({
  providedIn: 'root',
})
export class TasksPageService {
  searchedValue$ = this._store.select(getSearchedValue);
  filteredValue$ = this._store.select(getSearchedValue);

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _store: Store
  ) {}

  getItemBuQueryParams(): Task[] {
    return [];
  }

  search(search: string): void {
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: { search },
    });
  }
}
