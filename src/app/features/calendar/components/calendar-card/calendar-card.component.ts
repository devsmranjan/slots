import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AvatarComponent } from '../../../../shared/components';
import { CalendarInterface } from '../../models';

@Component({
  selector: 'app-calendar-card',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarCardComponent {
  @Input({ required: true }) calendar!: CalendarInterface;
}
