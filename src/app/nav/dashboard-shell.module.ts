import {Component, OnInit} from "@angular/core";
import {Loans} from "./loan.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  template: `
    <div>
      You selected:
        <label>Id: </label>{{ loan.id }}
        <label>Name: </label>{{ loan.name }}
    </div>

    <!--<mat-tab-group>-->
      <!--<mat-tab label="Summary" (click)="goToSummary(loan)"></mat-tab>-->
      <!--<mat-tab label="Payment" (click)="goToPayment(loan)"></mat-tab>-->
    <!--</mat-tab-group>-->

    <mat-grid-list cols="2" rowHeight="1:1">
      <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
        <mat-button-toggle value="Summary" (click)="goToSummary(loan)">Summary</mat-button-toggle>
        <mat-button-toggle value="Payment" (click)="goToPayment(loan)">Payment</mat-button-toggle>
      </mat-button-toggle-group>

      <!--<button mat-raised-button	(click)="goToSummary(loan)">Summary</button>-->
      <!--<button mat-raised-button	(click)="goToPayment(loan)">Payment</button>-->
    </mat-grid-list>

    <router-outlet></router-outlet>

  `,
})

export class DashboardShellModule implements OnInit {
  loan: Loans;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { loan: Loans }) => {
        this.loan = data.loan;
        this.goToSummary(this.loan);
      });

  }

  private goToSummary(loan: Loans) {
    this.router.navigate([`nav/${loan.id}/summary`, {loanID: loan.id, loanName: loan.name}])
    // this.router.navigate([`/summary`, {loan: loan}])
  }

  private goToPayment(loan: Loans) {
    this.router.navigate([`nav/${loan.id}/payment`, {loanID: loan.id, loanName: loan.name}])
    // this.router.navigate([`/summary`, {loan: loan}])
  }
}

