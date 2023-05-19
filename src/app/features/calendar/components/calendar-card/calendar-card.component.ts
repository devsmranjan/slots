import { CommonModule, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { CdkMenuModule } from '@angular/cdk/menu';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';
import { AvatarStackComponent } from '../../../../shared/containers';
import { getAvatarsByParticipants } from '../../../../shared/helpers';
import { MenuItemInterface } from '../../../../shared/models';
import { CalendarInterface } from '../../models';

@Component({
  selector: 'app-calendar-card',
  standalone: true,
  imports: [CommonModule, AvatarStackComponent, MenuComponent, CdkMenuModule],
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe],
})
export class CalendarCardComponent {
  @Input({ required: true }) calendar!: CalendarInterface;

  @Output() clickCard = new EventEmitter<void>();
  @Output() clickMenuItem = new EventEmitter<MenuItemInterface>();

  readonly menuItems: MenuItemInterface[] = [
    {
      key: 'COPY_LINK',
      label: 'Copy link',
      icon: 'link',
    },
  ];

  getAvatars() {
    return getAvatarsByParticipants(this.calendar.participants);
  }

  onToggleMenu(event: MouseEvent) {
    event.stopPropagation();
  }

  onClickCard() {
    this.clickCard.emit();
  }

  onClickMenuItem(item: MenuItemInterface) {
    this.clickMenuItem.emit(item);
  }
}
