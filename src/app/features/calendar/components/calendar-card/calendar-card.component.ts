import { CommonModule, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

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
  providers: [DatePipe],
})
export class CalendarCardComponent {
  @Input({ required: true }) calendar!: CalendarInterface;

  @Output() clickCard = new EventEmitter<number>();

  getAvatars() {
    return getAvatarsByParticipants(this.calendar.participants);
  }

  onClickCard() {
    this.clickCard.emit(this.calendar.id);
  }
}
