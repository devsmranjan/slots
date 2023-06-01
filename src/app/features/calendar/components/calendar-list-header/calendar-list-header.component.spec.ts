import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarListHeaderComponent } from './calendar-list-header.component';

describe('CalendarListHeaderComponent', () => {
  let component: CalendarListHeaderComponent;
  let fixture: ComponentFixture<CalendarListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarListHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
