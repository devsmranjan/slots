import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, tap } from 'rxjs';

import { CalendarInterface } from './models';
import { CalendarService } from './calendar.service';

export interface CalendarState {
  calendars: CalendarInterface[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CalendarState = {
  calendars: null,
  loading: false,
  error: null,
};

@Injectable()
export class CalendarStore extends ComponentStore<CalendarState> {
  readonly calendars$ = this.select((state) => state.calendars);
  readonly error$ = this.select((state) => state.error);
  readonly loading$ = this.select((state) => state.loading);

  constructor(private calendarService: CalendarService) {
    super(initialState);
  }

  readonly getCalendars = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() => {
        return this.calendarService.getCalendars().pipe(
          tapResponse({
            next: (calendars) => {
              this.patchState({ calendars });
            },
            error: (err: HttpErrorResponse) => {
              this.patchState({ error: err.message });
            },
            finalize: () => {
              this.patchState({ loading: false });
            },
          })
        );
      })
    );
  });
}
