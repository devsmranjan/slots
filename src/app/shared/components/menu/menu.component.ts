import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { MenuItemInterface } from '../../models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CdkMenuModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input({ required: true }) items!: MenuItemInterface[];

  @Output() clickItem = new EventEmitter<MenuItemInterface>();

  @ViewChild('menu', { static: true }) menu!: TemplateRef<MenuComponent>;

  hasChildren(item: MenuItemInterface) {
    return item.children && item.children.length > 0;
  }
  
  onClickItem(item: MenuItemInterface) {
    this.clickItem.emit(item);
  }
}
