import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import {NavModule} from "./nav/nav.module";
import {MaterialModule} from "./material/material.module";
import {AppGuard} from "./app.guard";
import {NavLoanListComponent} from "./nav/nav-loan-list.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full', canActivate: [AppGuard]
  },
  {path: 'nav', loadChildren: './nav/nav.module#NavModule', canActivate: [AppGuard]
  },
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    MaterialModule,
  ],
  exports:[RouterModule],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
