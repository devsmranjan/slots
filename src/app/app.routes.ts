import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'calendars',
        pathMatch: 'full'
    },
    {
        path: 'calendars',
        loadComponent:  () => import('./features/calendars/calendars.component').then(c => c.CalendarsComponent)
    }
];
