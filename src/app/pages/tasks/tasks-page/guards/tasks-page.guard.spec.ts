import { TestBed } from '@angular/core/testing';

import { TasksPageGuard } from './tasks-page.guard';

describe('TasksPageGuard', () => {
  let guard: TasksPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TasksPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
