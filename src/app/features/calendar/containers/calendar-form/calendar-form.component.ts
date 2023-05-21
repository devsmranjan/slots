import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarFormComponent {}
