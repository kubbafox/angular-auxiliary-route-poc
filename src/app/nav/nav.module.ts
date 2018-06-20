import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav.component";
import {NavRoutingModule} from "./nav-routing.module";
import {NavLoanListComponent} from "./nav-loan-list.component";
import {LoanService} from "./loan.service";
import {NavLoanDetailsComponent} from "./nav-loan-details.component";
import {DashboardSummaryComponent} from "./dashboard-summary.component";
import {DashboardShellModule} from "./dashboard-shell.module";

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
  ],
  declarations: [
    NavComponent,
    NavLoanListComponent,
    NavLoanDetailsComponent,
    DashboardSummaryComponent,
    DashboardShellModule,
  ],
  providers: [
    LoanService
  ]
})
export class NavModule { }
