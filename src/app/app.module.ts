import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import {NavModule} from "./nav/nav.module";
import {MaterialModule} from "./material/material.module";
import {AppGuard} from "./app.guard";

const appRoutes: Routes = [
  { path: '', redirectTo: '/nav/1', pathMatch: 'full', canActivate: [AppGuard]
  },
  {path: 'nav', loadChildren: './nav/nav.module#NavModule', canActivate: [AppGuard]
  },
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:false}),
    MaterialModule,
  ],
  exports:[RouterModule],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
