import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../../calendar.service';
import { CalendarCardComponent } from '../../components';

@Component({
  selector: 'app-calendar-list',
  standalone: true,
  imports: [CommonModule, CalendarCardComponent],
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarListComponent {
  calendars$ =  this.calendarService.getCalendars();

  constructor(private readonly calendarService: CalendarService) {}
}
