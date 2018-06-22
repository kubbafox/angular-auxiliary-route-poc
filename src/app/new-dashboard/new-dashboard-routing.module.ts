import {RouterModule, Routes} from "@angular/router";
import {NewDashboardShellComponent} from "./new-dashboard-shell.component";
import {DashboardPaymentComponent} from "../nav/dashboard-payment.component";
import {DashboardSummaryComponent} from "../nav/dashboard-summary.component";
import {NgModule} from "@angular/core";
import {NewDashboardPaymentComponent} from "./new-dashboard-payment.component";
import {NewDashboardSummaryComponent} from "./new-dashboard-summary.component";


const dashboardRoutes: Routes = [
  {
    path: '',
    component: NewDashboardShellComponent,
    children: [
      {
        path: 'summary',
        component: NewDashboardSummaryComponent,

      },
      {
        path: 'payment',
        component: NewDashboardPaymentComponent
      }
    ]
  }
];

@NgModule({
  imports:
    [RouterModule.forChild(dashboardRoutes)],
  exports:
    [RouterModule],
  providers: []
})

export class NewDashboardRoutingModule {}
