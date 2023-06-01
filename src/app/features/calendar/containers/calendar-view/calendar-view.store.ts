import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, tap } from 'rxjs';
import { CalendarService } from '../../calendar.service';
import { CalendarInterface } from '../../models';

interface CalendarViewState {
  calendar: CalendarInterface | null;
  loading: boolean;
  error: string | null;
}

export const initialCalendarViewState: CalendarViewState = {
  calendar: null,
  loading: false,
  error: null,
};

@Injectable()
export class CalendarViewStore extends ComponentStore<CalendarViewState> {
  constructor() {
    super(initialCalendarViewState);
  }

  /* --------------------------------- Injects -------------------------------- */
  #calendarService = inject(CalendarService);

  /* -------------------------------- Selectors ------------------------------- */

  readonly #calendar$ = this.select((state) => state.calendar);
  readonly #loading$ = this.select((state) => state.loading);
  readonly #error$ = this.select((state) => state.error);

  readonly vm$ = this.select(
    this.#calendar$,
    this.#loading$,
    this.#error$,
    (calendar, loading, error) => ({
      calendar,
      loading,
      error,
    })
  );

  /* --------------------------------- Updaters ------------------------------- */

  readonly setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading,
  }));

  readonly setError = this.updater((state, error: string | null) => ({
    ...state,
    error,
  }));

  readonly setCalendar = this.updater((state, calendar: CalendarInterface) => ({
    ...state,
    calendar,
  }));

  /* --------------------------------- Effects ------------------------------- */

  readonly #getCalendar = this.effect(
    (calendarId$: Observable<string | number>) =>
      calendarId$.pipe(
        tap(() => this.setLoading(true)),
        switchMap((calendarId) =>
          this.#calendarService.getCalendarById(calendarId).pipe(
            tapResponse(
              (calendar) => this.setCalendar(calendar),
              (error: HttpErrorResponse) =>
                this.setError(error.error?.message ?? error.message),
              () => this.setLoading(false)
            )
          )
        )
      )
  );

  /* --------------------------------- Methods -------------------------------- */

  loadCalendar(calendarId: string | number) {
    this.#getCalendar(calendarId);
  }
}
