import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  config = signal({
    title: 'Angular Shop',
    color: '#ff0000',
    enableShop: true
  })

  setTitle(title: string) {
    this.config.update(cfg => ({...cfg, title: title}));
  }

  setColor(color: string) {
    this.config.update(cfg => ({...cfg, color: color}));
  }

  setEnableShop(enableShop: boolean) {
    this.config.update(cfg => ({...cfg, enableShop: enableShop}));
  }
}
