import {RouterModule, Routes} from "@angular/router";
import {NavComponent} from "./nav.component";
import {NgModule} from "@angular/core";
import {NavLoanListComponent} from "./nav-loan-list.component";
import {DashboardShellModule} from "./dashboard-shell.module";
import {NavLoanDetailsComponent} from "./nav-loan-details.component";
import {NavDetailResolver} from "./nav-detail-resolver.service";
import {DashboardSummaryComponent} from "./dashboard-summary.component";
import {DashboardPaymentComponent} from "./dashboard-payment.component";
import {AppGuard} from "../app.guard";
import {NewDashboardModule} from "../new-dashboard/new-dashboard.module";

const navRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: NavLoanListComponent,
        canActivate: [AppGuard],
        children: [
          {
            path: ':id',
            resolve: {
              loan: NavDetailResolver,
            },
            loadChildren: '../new-dashboard/new-dashboard.module#NewDashboardModule'

            // component: DashboardShellModule,
            // canActivate: [AppGuard],
            // children: [
            //   // {
            //   //   path: 'nav/:id',
            //   //   redirectTo: DashboardSummaryComponent,
            //   // },
            //   {
            //   path: 'summary',
            //   component: DashboardSummaryComponent,
            //
            //   },
            //   {
            //     path: 'payment',
            //     component: DashboardPaymentComponent
            //   }
            //   ],
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(navRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [NavDetailResolver]

})

export class NavRoutingModule {
}
