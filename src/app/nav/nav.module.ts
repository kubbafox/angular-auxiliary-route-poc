import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from "./nav.component";
import {NavRoutingModule} from "./nav-routing.module";
import {NavLoanListComponent} from "./nav-loan-list.component";
import {LoanService} from "./loan.service";
import {NavLoanDetailsComponent} from "./nav-loan-details.component";
import {DashboardSummaryComponent} from "./dashboard-summary.component";
import {DashboardShellModule} from "./dashboard-shell.module";
import {DashboardPaymentComponent} from "./dashboard-payment.component";
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatGridListModule, MatRadioModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {NewDashboardModule} from "../new-dashboard/new-dashboard.module";


@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatRadioModule],
  exports: [MatToolbarModule, MatTabsModule, MatButtonModule, MatGridListModule, MatButtonToggleModule, MatRadioModule],
  declarations: [
    NavComponent,
    NavLoanListComponent,
    NavLoanDetailsComponent,
    DashboardSummaryComponent,
    DashboardShellModule,
    DashboardPaymentComponent,
  ],
  providers: [
    LoanService
  ]
})
export class NavModule {
}
