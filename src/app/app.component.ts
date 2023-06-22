import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'E-mail', url: '/folder/inbox', icon: 'mail' },
    { title: 'Telegram', url: '/folder/outbox', icon: 'paper-plane' },
  ];
  constructor() {}
}
