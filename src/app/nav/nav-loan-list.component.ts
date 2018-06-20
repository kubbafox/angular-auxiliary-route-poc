import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Loans, LoanService } from './loan.service';
import { Observable }            from 'rxjs';
import { switchMap }             from 'rxjs/operators';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let loan of loans$ | async"
        [class.selected]="loan.id === selectedId">
        <a [routerLink]="[loan.id]">
          <span class="badge">{{ loan.id }}</span>{{ loan.name }}
        </a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `
})

export class NavLoanListComponent implements OnInit {
  loans$: Observable<Loans[]>;
  selectedId: number;

  constructor(
    private service: LoanService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loans$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getLoans();
      })
    );
  }
}
