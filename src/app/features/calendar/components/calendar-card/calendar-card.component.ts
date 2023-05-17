import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CalendarInterface } from '../../models';

@Component({
  selector: 'app-calendar-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarCardComponent {
  @Input({ required: true }) calendar!: CalendarInterface;
}
