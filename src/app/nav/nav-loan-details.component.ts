import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Loans} from "./loan.service";

@Component({
  template: `
    <div>
        <span>Id: </span>{{ loan.id }}
        <span>Name: </span>{{ loan.name }}
    </div>
  `,
})

export class NavLoanDetailsComponent implements OnInit {
  loan: Loans;

  constructor (
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // console.log('Data from route', this.route.data)
    // this.route.data
    //   .subscribe((data: { loan: Loans }) => {
    //     this.loan = data.loan;
    //   });
  }
}
