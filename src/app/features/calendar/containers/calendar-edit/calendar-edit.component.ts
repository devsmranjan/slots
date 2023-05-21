import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarFormComponent } from '../calendar-form/calendar-form.component';

@Component({
  selector: 'app-calendar-edit',
  standalone: true,
  imports: [CommonModule, CalendarFormComponent],
  templateUrl: './calendar-edit.component.html',
  styleUrls: ['./calendar-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarEditComponent {}
