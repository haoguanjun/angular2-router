// main entry point
/*
import { provide }              from "@angular/core";
import { APP_BASE_HREF }        from "@angular/common";
*/
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

// Extend Observable throughout the app
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
//  provide(APP_BASE_HREF, {useValue : '/' })
])
.catch(err => console.error(err));


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/