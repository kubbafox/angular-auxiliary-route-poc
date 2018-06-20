import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Loans} from "./loan.service";

@Component({
  template: `
    <div>
      <H5>Details</H5>
      You selected:
      <div>
        <label>Id: </label>{{ loan.id }}
        <label>Name: </label>{{ loan.name }}
      </div>
    </div>
  `,
})

export class NavLoanDetailsComponent implements OnInit {
  loan: Loans;

  constructor (
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log('Data from route', this.route.data)
    this.route.data
      .subscribe((data: { loan: Loans }) => {
        this.loan = data.loan;
      });
  }
}
