import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './core/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar />

    <div class="max-w-screen-md mx-auto">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('state-management');
}
