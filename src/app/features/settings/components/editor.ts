import {Component, inject} from '@angular/core';
import {SettingsService} from '../../../core/settings.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-editor',
  imports: [
    JsonPipe
  ],
  template: `
    <h1 class="text-xl my-6">Editor</h1>

    <div class="flex gap-2 items-center">
      <input
        type="text"
        class="input input-bordered"
        #title
        (input)="settingsService.setTitle(title.value)"
        [value]="settingsService.config().title"
      >

      <input
        type="checkbox"
        class="toggle toggle-success"
        #enableShop
        (input)="settingsService.setEnableShop(enableShop.checked)"
        [checked]="settingsService.config().enableShop"
      >

      <input
        type="color"
        class="input input-bordered"
        #color
        (input)="settingsService.setColor(color.value)"
        [value]="settingsService.config().color"
      >
    </div>

    <pre>{{settingsService.config() | json}}</pre>
  `,
  styles: ``
})
export class Editor {
  settingsService = inject(SettingsService);
}
