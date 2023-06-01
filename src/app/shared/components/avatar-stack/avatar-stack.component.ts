import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { AvatarInterface } from '../../models';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-avatar-stack',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './avatar-stack.component.html',
  styleUrls: ['./avatar-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarStackComponent {
  @Input({ required: true }) avatars!: AvatarInterface[];
  @Input() maxLength = 2;
  @Input() color!: string;

  @Output() clickAddNew = new EventEmitter<void>();
  @Output() clickShowAll = new EventEmitter<void>();

  getAvatars() {
    return this.avatars.slice(0, Math.min(this.avatars.length, this.maxLength));
  }

  trackById(index: number, avatar: AvatarInterface) {
    return avatar.id;
  }

  onClickAddNew(event: MouseEvent) {
    event.stopPropagation();

    this.clickAddNew.emit();
  }

  onClickShowAll(event: MouseEvent) {
    event.stopPropagation();

    this.clickShowAll.emit();
  }
}
