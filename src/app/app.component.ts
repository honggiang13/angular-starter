/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav class="ui secondary menu">
      <a class="item" [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Trang chủ
      </a>
      <a class="item" [routerLink]=" ['./books'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Books
      </a>
      <a class="item" [routerLink]=" ['./detail'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Detail
      </a>
      <a class="item" [routerLink]=" ['./barrel'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Barrel
      </a>
      <a class="item" [routerLink]=" ['./about'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        About
      </a>
      <a *ngIf="showDevModule" [routerLink]=" ['./dev-module'] "
         routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        DevModule
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search...">
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">
          Logout
        </a>
      </div>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `
})
export class AppComponent implements OnInit {
  public name = 'FoxReader';
  public tipe = 'assets/img/tipe.png';
  public twitter = 'https://twitter.com/gdi2290';
  public url = 'https://ez-connect.net';
  public showDevModule: boolean = environment.showDevModule;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
