import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CalendarService } from '../../calendar.service';
import { CalendarViewStore } from './calendar-view.store';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
  providers: [CalendarService, CalendarViewStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarViewComponent {
  /* --------------------------------- Injects -------------------------------- */

  #calendarViewStore = inject(CalendarViewStore);

  /* --------------------------------- Inputs --------------------------------- */

  @Input() set id(id: string | number) {
    this.#calendarViewStore.loadCalendar(id);
  }

  /* -------------------------------- Selectors ------------------------------- */

  readonly calendarViewVm$ = this.#calendarViewStore.vm$;
}
