import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CalendarInterface } from './models';
import { SERVER_URL } from '../../shared/constants';

@Injectable()
export class CalendarService {
  constructor(private http: HttpClient) {}

  getCalendars() {
    return this.http.get<CalendarInterface[]>(`${SERVER_URL}/calendars`);
  }
}
