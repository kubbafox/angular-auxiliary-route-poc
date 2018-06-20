import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import {NavModule} from "./nav/nav.module";
import {DashboardModule} from "./dashboard/dashboard.module";

const appRoutes: Routes = [
  { path: '', redirectTo: '/nav/1/summary', pathMatch: 'full' },
  {
    path: 'nav',
    loadChildren: './nav/nav.module#NavModule'
  },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavModule,
    DashboardModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
