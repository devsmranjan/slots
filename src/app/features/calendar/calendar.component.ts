import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarListComponent } from './containers';
import { CalendarService } from './calendar.service';
import { CalendarStore } from './calendar.store';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CalendarListComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CalendarService, CalendarStore]
})
export class CalendarComponent {}
