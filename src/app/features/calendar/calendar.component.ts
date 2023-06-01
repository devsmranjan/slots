import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CalendarListComponent } from './containers';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CalendarListComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {}
