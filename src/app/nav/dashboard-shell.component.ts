import {AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {Loans} from "./loan.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  template: `
    <div>
      You selected:
      <label>Id: </label>{{ loan.id }}
      <label>Name: </label>{{ loan.name }}
    </div>

    <mat-grid-list cols="2" rowHeight="1:1">
      <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
        <mat-button-toggle value="Summary" (click)="goToSummary(loan)">Summary</mat-button-toggle>
        <mat-button-toggle value="Payment" (click)="goToPayment(loan)">Payment</mat-button-toggle>
      </mat-button-toggle-group>

    </mat-grid-list>

    <router-outlet></router-outlet>

  `,
})
export class DashboardShellComponent implements OnInit, OnDestroy {

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

  ngOnDestroy() {
  }

  private goToSummary(loan: Loans) {
    console.log('goToSummary');
    this.router.navigate([`nav/${loan.id}/summary`, {loanID: loan.id, loanName: loan.name}])
    // this.router.navigate([`/summary`, {loan: loan}])
  }

  private goToPayment(loan: Loans) {
    this.router.navigate([`nav/${loan.id}/payment`, {loanID: loan.id, loanName: loan.name}])
    // this.router.navigate([`/summary`, {loan: loan}])
  }
}

