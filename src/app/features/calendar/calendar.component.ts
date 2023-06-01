import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CalendarService } from './calendar.service';
import { CalendarListComponent } from './containers';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CalendarListComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CalendarService],
})
export class CalendarComponent {}
