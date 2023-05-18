import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AvatarComponent } from '../../components';
import { AvatarInterface } from '../../models';

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
  @Input() color!: string

  getAvatars() {
    return this.avatars.slice(0, Math.min(this.avatars.length, this.maxLength));
  }
}
