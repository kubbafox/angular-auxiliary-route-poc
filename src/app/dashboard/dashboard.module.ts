import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardShellModule } from "./dashboard-shell.module";
import {DashboardSummaryComponent} from "./dashboard-summary.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardShellModule, DashboardSummaryComponent]
})
export class DashboardModule { }
