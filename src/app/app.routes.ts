import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'calendars',
        pathMatch: 'full'
    },
    {
        path: 'calendars',
        loadComponent:  () => import('./features/calendar/calendar.component').then(c => c.CalendarComponent)
    }
];
