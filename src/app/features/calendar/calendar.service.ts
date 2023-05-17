import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SERVER_URL } from '../../shared/constants';
import { CalendarInterface } from './models';

@Injectable()
export class CalendarService {
  constructor(private http: HttpClient) {}

  getCalendars() {
    return this.http.get<CalendarInterface[]>(`${SERVER_URL}/calendars`);
  }
}
