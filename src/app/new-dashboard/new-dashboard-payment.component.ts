import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  template: `
    <div>This is payment page</div>
    <div>payment for {{ loanID }}</div>
    <div>payment for {{ loanName }}</div>
  `,
})

export class NewDashboardPaymentComponent implements OnInit {

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
