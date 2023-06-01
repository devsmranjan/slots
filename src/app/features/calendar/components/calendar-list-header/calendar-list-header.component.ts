import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-calendar-list-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-list-header.component.html',
  styleUrls: ['./calendar-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarListHeaderComponent {
  @Input() headerTitle: string | null = null;
  @Input() query: string | null = null;

  @Output() changeQuery = new EventEmitter<string>();

  onChangeQuery(e: Event): void {
    const query = (e.target as HTMLInputElement).value;

    this.changeQuery.emit(query);
  }
}
