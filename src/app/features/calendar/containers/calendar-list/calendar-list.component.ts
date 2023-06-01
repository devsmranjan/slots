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
import { CalendarService } from '../../calendar.service';
import {
  CalendarCardComponent,
  CalendarListHeaderComponent,
} from '../../components';
import { CalendarInterface } from '../../models';
import { CalendarListStore } from './calendar-list.store';

@Component({
  selector: 'app-calendar-list',
  standalone: true,
  imports: [
    CommonModule,
    CalendarCardComponent,
    CdkMenuModule,
    MenuComponent,
    CalendarListHeaderComponent,
  ],
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
  providers: [CalendarListStore, CalendarService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarListComponent implements OnInit {
  /* --------------------------------- Injects -------------------------------- */

  #calendarListStore = inject(CalendarListStore);

  /* --------------------------------- Selectors -------------------------------- */

  calendarListVm$ = this.#calendarListStore.vm$;

  ngOnInit(): void {
    this.#calendarListStore.loadCalendars();
  }

  trackById(index: number, calendar: CalendarInterface) {
    return calendar.id;
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
    console.log('Add new participants');
    console.log({ calendarId });
  }

  onClickShowAllParticipants(calendarId: number) {
    console.log('Show all participants');
    console.log({ calendarId });
  }

  onChangeQuery(query: string) {
    this.#calendarListStore.searchCalendars(query);
  }
}
