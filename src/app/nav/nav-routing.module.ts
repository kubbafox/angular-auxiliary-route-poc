import {RouterModule, Routes} from "@angular/router";
import {NavComponent} from "./nav.component";
import {NgModule} from "@angular/core";
import {NavLoanListComponent} from "./nav-loan-list.component";
import {DashboardShellModule} from "./dashboard-shell.module";
import {NavLoanDetailsComponent} from "./nav-loan-details.component";
import {NavDetailResolver} from "./nav-detail-resolver.service";
import {DashboardSummaryComponent} from "./dashboard-summary.component";

const navRoutes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
    children: [
      {
        path: '',
        component: NavLoanListComponent,
        children: [
          {
            path: ':id',
            component: DashboardShellModule,
            resolve: {
              loan: NavDetailResolver,
            },
            children: [
              // {
              //   path: '',
              //   redirectTo: 'summary',
              // },
              {
              path: 'summary',
              component: DashboardSummaryComponent
              }],
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
