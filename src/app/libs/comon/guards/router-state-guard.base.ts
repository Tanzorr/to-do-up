import {
  ActivatedRouteSnapshot,
  CanActivate,
  Params,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { mapTo } from 'rxjs';

export abstract class RouterStateGuardBase<Q extends Params | null | undefined>
  implements CanActivate
{
  abstract defaultQueryParams: Q;

  protected constructor(
    protected _store: Store,
    protected _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const routeQueryParams = this.processQueryParams(route);
    const queryParams = {
      ...this.defaultQueryParams,
      ...routeQueryParams,
    };

    return this.handleQueryParamsUpdate(state, queryParams);
  }

  protected handleQueryParamsUpdate(
    state: RouterStateSnapshot,
    queryParams: Q
  ): Observable<boolean | UrlTree> {
    const urlWithoutQueryParams = state.url.split('?')[0];
    const urlTree = this._router.createUrlTree([urlWithoutQueryParams], {
      queryParams,
    });
    const serializedUrlTree = this._router.serializeUrl(urlTree);
    const currentUrl = state.url;
    const updateQueryParamsInState$ =
      this.updateQueryParamsInState(queryParams);

    return serializedUrlTree === currentUrl
      ? updateQueryParamsInState$.pipe(mapTo(true))
      : updateQueryParamsInState$.pipe(mapTo(urlTree));
  }

  protected abstract processQueryParams(route: ActivatedRouteSnapshot): Q;

  protected abstract updateQueryParamsInState(
    queryParams: Q
  ): Observable<unknown>;
}
