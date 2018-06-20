import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Loans} from "../nav/loan.service";

@Component({
  template: `
    <div>Hey, this is account {{ loan.name }} summary page</div>
  `,
})

export class DashboardSummaryComponent implements OnInit {

  loan: Loans;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { loan: Loans }) => {
        this.loan = data.loan;
      });
  }
}
