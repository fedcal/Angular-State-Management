import { Component } from '@angular/core';
import {Editor} from './components/editor';
import {Preview} from './components/preview';

@Component({
  selector: 'app-settings',
  imports: [
    Editor,
    Preview
  ],
  template: `
    <h1 class="text-3xl text-center my-6">Settings</h1>

    <div class="flex">
      <div class="w-1/2">
        <app-editor />
      </div>
      <div class="w-1/2">
        <app-preview />
      </div>
    </div>
  `,
  styles: ``
})
export default class Settings {

}
