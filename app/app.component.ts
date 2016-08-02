import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {HeroService} from './heroes/hero.service';
@Component({
  selector: 'my-app',
  template: `
    <h1>Contacts App</h1>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
     <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService]
})
export class AppComponent { }
