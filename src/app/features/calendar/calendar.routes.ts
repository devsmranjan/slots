import { Routes } from '@angular/router';

export const CALENDER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./containers/calendar-list/calendar-list.component').then(
        (c) => c.CalendarListComponent
      ),
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./containers/calendar-view/calendar-view.component').then(
            (c) => c.CalendarViewComponent
          ),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./containers/calendar-edit/calendar-edit.component').then(
            (c) => c.CalendarEditComponent
          ),
      },
    ],
  },
];
