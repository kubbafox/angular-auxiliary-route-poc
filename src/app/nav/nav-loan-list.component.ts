import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {Loans, LoanService} from './loan.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {el} from "@angular/platform-browser/testing/src/browser_util";


@Component({
  template: `
    <mat-toolbar>
      <ul style="display: flex">
        <li *ngFor="let loan of loans$ | async"
            [class.selected]="loan.id === selectedId" style="margin-left: 40px;">
          <!--<a [routerLink]="[loan.id]">-->
            <button (click)="goToDashboard(loan.id)"><span class="badge">{{ loan.id }}</span>{{ loan.name }}</button>
            <!--<a [routerLink]="'1/summary'">-->
          <!--</a>-->
        </li>
      </ul>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})

export class NavLoanListComponent implements OnInit {
  loans$: Observable<Loans[]>;
  selectedId: number;
  currentURL: string;
  goToURL: string;

  constructor(
    private service: LoanService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loans$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getLoans();
      })
    );

    this.goToDashboard(1);
  }

  private trackCurrentSelectedId() {
    this.currentURL = this.router.url.substring(0, 6);
    console.log('tracking..current url', this.currentURL);
  }

  private goToDashboard(selectedId){
    this.trackCurrentSelectedId();
    console.log('Current URL', this.currentURL)
    this.goToURL = '/nav/'.concat(selectedId.toString());
    console.log('Goto URL,', this.goToURL)
    if (this.currentURL !== this.goToURL) {
      this.router.navigate([`nav/${selectedId}/`])
    } else {
      console.log('CANNOT ROUTE TO THE SAME PAGE!')
    }
}

}
