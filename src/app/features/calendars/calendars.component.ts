import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarsComponent {}
