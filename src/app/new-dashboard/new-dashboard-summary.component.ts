import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  template: `
    <div>This is summary page</div>
    <div>Summary for {{ loanID }}</div>
    <div>Summary for {{ loanName }}</div>
  `,
})

export class NewDashboardSummaryComponent implements OnInit {

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
