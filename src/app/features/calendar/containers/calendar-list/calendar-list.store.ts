import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';

import { CalendarService } from '../../calendar.service';
import { CalendarInterface } from '../../models';

export interface CalendarListState {
  calendars: CalendarInterface[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CalendarListState = {
  calendars: null,
  loading: false,
  error: null,
};

@Injectable()
export class CalendarListStore extends ComponentStore<CalendarListState> {
  constructor() {
    super(initialState);
  }

  /* --------------------------------- Injects -------------------------------- */

  #calendarService = inject(CalendarService);

  /* -------------------------------- Selectors ------------------------------- */

  readonly #calendars$ = this.select((state) => state.calendars);
  readonly #error$ = this.select((state) => state.error);
  readonly #loading$ = this.select((state) => state.loading);

  readonly vm$ = this.select(
    this.#calendars$,
    this.#error$,
    this.#loading$,
    (calendars, error, loading) => ({
      calendars,
      error,
      loading,
    })
  );

  /* --------------------------------- Updaters -------------------------------- */

  setCalendars = this.updater((state, calendars: CalendarInterface[]) => ({
    ...state,
    calendars,
  }));

  setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading,
  }));

  setError = this.updater((state, error: string) => ({
    ...state,
    error,
  }));

  /* --------------------------------- Effects -------------------------------- */

  readonly #getCalendars = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() => {
        return this.#calendarService.getCalendars().pipe(
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

  /* --------------------------------- Methods -------------------------------- */

  loadCalendars() {
    this.#getCalendars();
  }

  reloadCalendars() {
    this.loadCalendars();
  }
}
