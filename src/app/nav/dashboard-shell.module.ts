import {Component, OnInit} from "@angular/core";
import {Loans} from "./loan.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  template: `
    <div>----DashBoard-module-----</div>
    <div>
      You selected:
      <div>
        <label>Id: </label>{{ loan.id }}
        <label>Name: </label>{{ loan.name }}
      </div>
    </div>
    
    <div>Menu</div>
    <nav>
      <div>
        <button (click)="goToSummary(loan)">Summary</button>
      </div>
    </nav>
    <router-outlet></router-outlet>
    <div>----DashBoard-module-----</div>

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
    console.log('Data from route', this.route.data)
    this.route.data
      .subscribe((data: { loan: Loans }) => {
        this.loan = data.loan;
      });
  }

  goToSummary(loan: Loans) {
    this.router.navigate([`nav/${loan.id}/summary`, {loanID: loan.id, loanName: loan.name}])
    // this.router.navigate([`/summary`, {loan: loan}])
  }
}

