import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SERVER_URL } from '../../shared/constants';
import { CalendarInterface } from './models';

@Injectable()
export class CalendarService {
  constructor(private http: HttpClient) {}

  getCalendars(page: number, limit: number, query: string | null) {
    const params = new URLSearchParams({
      _page: page.toString(),
      _limit: limit.toString(),
    });

    if (query) {
      params.append('q', query);
    }

    return this.http.get<CalendarInterface[]>(
      `${SERVER_URL}/calendars?${params.toString()}`
    );
  }
}
