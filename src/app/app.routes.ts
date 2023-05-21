import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'calendars',
    pathMatch: 'full',
  },
  {
    path: 'calendars',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/calendar/calendar.component').then(
            (c) => c.CalendarComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './features/calendar/containers/calendar-view/calendar-view.component'
          ).then((c) => c.CalendarViewComponent),
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import(
            './features/calendar/containers/calendar-edit/calendar-edit.component'
          ).then((c) => c.CalendarEditComponent),
      },
      {
        path: 'create',
        loadComponent: () =>
          import(
            './features/calendar/containers/calendar-create/calendar-create.component'
          ).then((c) => c.CalendarCreateComponent),
      },
    ],
  },
];
