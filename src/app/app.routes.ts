import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'calendars',
    pathMatch: 'full',
  },
  {
    path: 'calendars',
    loadChildren: () =>
      import('./features/calendar/calendar.routes').then(
        (r) => r.CALENDER_ROUTES
      ),
  },
];
