import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { debounce } from 'lodash-es';
import { Observable, switchMap, tap } from 'rxjs';

import { CalendarService } from '../../calendar.service';
import { CalendarInterface } from '../../models';

export interface CalendarListParams {
  page: number;
  limit: number;
  query: string | null;
}

export interface CalendarListState extends CalendarListParams {
  calendars: CalendarInterface[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CalendarListState = {
  calendars: null,
  loading: false,
  error: null,
  page: 0,
  limit: 10,
  query: null,
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
  readonly #page$ = this.select((state) => state.page);
  readonly #limit$ = this.select((state) => state.limit);
  readonly #query$ = this.select((state) => state.query);

  readonly vm$ = this.select(
    this.#calendars$,
    this.#error$,
    this.#loading$,
    this.#page$,
    this.#limit$,
    this.#query$,
    (calendars, error, loading, page, limit, query) => ({
      calendars,
      error,
      loading,
      page,
      limit,
      query,
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

  setPage = this.updater((state, page: number) => ({
    ...state,
    page,
  }));

  setLimit = this.updater((state, limit: number) => ({
    ...state,
    limit,
  }));

  setQuery = this.updater((state, query: string) => ({
    ...state,
    query,
  }));

  /* --------------------------------- Effects -------------------------------- */

  readonly #getCalendars = this.effect(
    (params$: Observable<CalendarListParams>) => {
      return params$.pipe(
        tap(() => this.setLoading(true)),
        switchMap(({ page, limit, query }) => {
          return this.#calendarService.getCalendars(page, limit, query).pipe(
            tapResponse({
              next: (calendars) => {
                this.setCalendars(calendars);
              },
              error: (err: HttpErrorResponse) => {
                this.setError(err.message);
              },
              finalize: () => {
                this.setLoading(false);
              },
            })
          );
        })
      );
    }
  );

  /* --------------------------------- Methods -------------------------------- */

  loadCalendars() {
    const { page, limit, query } = this.get();

    this.#getCalendars({ page, limit, query });
  }

  reloadCalendars() {
    this.loadCalendars();
  }

  #searchCalendars(query: string) {
    this.setQuery(query);
    this.setPage(0);
    this.loadCalendars();
  }

  searchCalendars = debounce(this.#searchCalendars, 500);
}
