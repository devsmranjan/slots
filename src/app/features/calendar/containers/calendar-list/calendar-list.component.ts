import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCardComponent } from '../../components';
import { CalendarStore } from '../../calendar.store';
import { CalendarInterface } from '../../models';

@Component({
  selector: 'app-calendar-list',
  standalone: true,
  imports: [CommonModule, CalendarCardComponent],
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

  trackById(index: number, calendar: CalendarInterface) {
    return calendar.id;
  }
}
