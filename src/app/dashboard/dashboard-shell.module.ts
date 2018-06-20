import {Component, OnInit} from "@angular/core";
import {Loans} from "../nav/loan.service";
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
      <a routerLink="summary" routerLinkActive="active">Summary</a>
      <a routerLink="payment" routerLinkActive="active">Payment</a>
    </nav>
    <router-outlet></router-outlet>

    <div>----DashBoard-module-----</div>

  `,
})

export class DashboardShellModule implements OnInit {
  loan: Loans;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    console.log('Data from route', this.route.data)
    this.route.data
      .subscribe((data: { loan: Loans }) => {
        this.loan = data.loan;
      });
  }
}

