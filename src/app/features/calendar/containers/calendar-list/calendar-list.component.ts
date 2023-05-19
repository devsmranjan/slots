import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MenuComponent } from '../../../../shared/components/menu/menu.component';
import { MenuItemInterface } from '../../../../shared/models';
import { CalendarStore } from '../../calendar.store';
import { CalendarCardComponent } from '../../components';
import { CalendarInterface } from '../../models';

@Component({
  selector: 'app-calendar-list',
  standalone: true,
  imports: [CommonModule, CalendarCardComponent, CdkMenuModule, MenuComponent],
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarListComponent implements OnInit {
  calendars$ = this.calendarStore.calendars$;
  error$ = this.calendarStore.error$;
  loading$ = this.calendarStore.loading$;

  constructor(private readonly calendarStore: CalendarStore) {}

  ngOnInit(): void {
    this.calendarStore.getCalendars();
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
