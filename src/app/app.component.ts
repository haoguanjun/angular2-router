import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError } from "@angular/router";

import { DialogService } from './dialog.service';
import { HeroService }   from './heroes/hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['/crisis-center']">Crisis Center</a>
      <a [routerLink]="['/heroes']">Heroes</a>
    </nav>
    <hr/>
    <nav>
      <a href="/crisis-center/">Crisis-Center/</a>
      <a href="/Crisis-Center">CRISIS-CENTER</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [
    DialogService,
    HeroService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
  constructor(private _router: Router ) {

    _router.events.subscribe( e=>{


      console.log( e );
      if( e instanceof NavigationStart ){
        console.log("starting navigation.");
      }

      if( e instanceof NavigationEnd ) {
        console.log("ending navigation.");
      }

      if( e instanceof NavigationError ) {

        let lowerCaseUrl = e.url.toLowerCase();
        this._router.navigateByUrl( lowerCaseUrl);
      }
    })
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/