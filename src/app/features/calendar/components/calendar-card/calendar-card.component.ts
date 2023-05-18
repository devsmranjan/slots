import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AvatarStackComponent } from '../../../../shared/containers';
import { getAvatarsByParticipants } from '../../../../shared/helpers';
import { CalendarInterface } from '../../models';

@Component({
  selector: 'app-calendar-card',
  standalone: true,
  imports: [CommonModule, AvatarStackComponent],
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarCardComponent {
  @Input({ required: true }) calendar!: CalendarInterface;

  getAvatars() {
    return getAvatarsByParticipants(this.calendar.participants);
  }
}
