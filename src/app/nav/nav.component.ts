import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoanService} from "./loan.service";

@Component({
  template: `
    <h2>CSW</h2>
    <router-outlet></router-outlet>
  `
})

export class NavComponent implements OnInit {
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    // this.router.navigate(['nav/1'])
  }

}
