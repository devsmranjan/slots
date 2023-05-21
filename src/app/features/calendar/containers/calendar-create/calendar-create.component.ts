import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarFormComponent } from '../calendar-form/calendar-form.component';

@Component({
  selector: 'app-calendar-create',
  standalone: true,
  imports: [CommonModule, CalendarFormComponent],
  templateUrl: './calendar-create.component.html',
  styleUrls: ['./calendar-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarCreateComponent {}
