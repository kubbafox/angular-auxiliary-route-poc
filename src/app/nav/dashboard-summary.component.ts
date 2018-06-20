import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Loans} from "./loan.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  template: `
    <div>Hey, this is account {{ loanID }} summary page</div>
    <div>Hey, this is account {{ loanName }} summary page</div>

  `,
})

export class DashboardSummaryComponent implements OnInit {

  loanID: String;
  loanName: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.loanID = this.route.snapshot.paramMap.get('loanID');
    this.loanName = this.route.snapshot.paramMap.get('loanName');

  }


}
