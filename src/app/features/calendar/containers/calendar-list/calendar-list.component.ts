import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';

import { MenuComponent } from '../../../../shared/components/menu/menu.component';
import { MenuItemInterface } from '../../../../shared/models';
import { CalendarCardComponent } from '../../components';
import { CalendarInterface } from '../../models';
import { CalendarListStore } from './calendar-list.store';

@Component({
  selector: 'app-calendar-list',
  standalone: true,
  imports: [CommonModule, CalendarCardComponent, CdkMenuModule, MenuComponent],
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
  providers: [CalendarListStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarListComponent implements OnInit {
  // injects
  #calendarListStore = inject(CalendarListStore);

  // selectors
  calendars$ = this.#calendarListStore.calendars$;
  error$ = this.#calendarListStore.error$;
  loading$ = this.#calendarListStore.loading$;

  ngOnInit(): void {
    this.#calendarListStore.getCalendars();
  }

  onClickCalendarCard(calendarId: number) {
    console.log('Calendar card clicked');
    console.log({ calendarId });
  }

  onClickCalendarMenuItem(item: MenuItemInterface, calendarId: number) {
    console.log('Menu item clicked');
    console.log({ item, calendarId });
  }

  onClickAddNewParticipants(calendarId: number) {
    console.log('Add new particpants');
    console.log({ calendarId });
  }

  onClickShowAllParticipants(calendarId: number) {
    console.log('Show all participants');
    console.log({ calendarId });
  }

  trackById(index: number, calendar: CalendarInterface) {
    return calendar.id;
  }
}
