import { RouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getCurrentRouteId = createSelector(getRouterState, (router) => {
  return router?.state?.params['id'];
});
