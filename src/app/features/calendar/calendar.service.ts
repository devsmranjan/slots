import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

import { CalendarInterface } from './models';

@Injectable()
export class CalendarService {
  constructor() {}

  getCalendars() {
    return of<CalendarInterface[]>([
      {
        id: 1,
        title: 'SDE 1',
      },
      {
        id: 2,
        title: 'SDE 2',
      },
    ]).pipe(delay(3000));
  }
}
