import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent, SidebarComponent } from './core/components';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule, NavbarComponent, SidebarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
