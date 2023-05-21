import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from '../../../shared/components';
import { SidebarItemInterface } from '../../../shared/models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AvatarComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  sidebarItems: SidebarItemInterface[] = [
    {
      icon: 'home',
      title: 'Home',
      path: '/calendars',
    },
    {
      icon: 'calendar_month',
      title: 'Calendar',
      path: '/calendar',
    },
    {
      icon: 'groups',
      title: 'Shared with me',
      path: '/shared',
    },
  ];
}
