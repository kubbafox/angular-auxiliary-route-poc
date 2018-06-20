import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {Loans, LoanService} from './loan.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';


@Component({
  template: `
    <mat-toolbar>
      <ul style="display: flex">
        <li *ngFor="let loan of loans$ | async"
            [class.selected]="loan.id === selectedId" style="margin-left: 40px;">
          <a [routerLink]="[loan.id]">
            <span class="badge">{{ loan.id }}</span>{{ loan.name }}
          </a>
        </li>
      </ul>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})

export class NavLoanListComponent implements OnInit {
  loans$: Observable<Loans[]>;
  path: String;
  selectedId: number;

  constructor(
    private service: LoanService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.loans$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getLoans();
      })
    );
  }

  getPath() {
    return this.selectedId.toString().concat('/summary');
  }
}
