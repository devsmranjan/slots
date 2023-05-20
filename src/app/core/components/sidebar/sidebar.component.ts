import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from '../../../shared/components';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AvatarComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}
