import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewDashboardSummaryComponent} from "./new-dashboard-summary.component";
import {NewDashboardPaymentComponent} from "./new-dashboard-payment.component";
import {NewDashboardShellComponent} from "./new-dashboard-shell.component";
import {NewDashboardRoutingModule} from "./new-dashboard-routing.module";
import {MatButtonModule, MatButtonToggleModule, MatGridListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    NewDashboardRoutingModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [
    NewDashboardSummaryComponent,
    NewDashboardPaymentComponent,
    NewDashboardShellComponent,
  ]
})
export class NewDashboardModule { }
