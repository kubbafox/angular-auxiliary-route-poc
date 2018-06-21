import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';
import { map, take }              from 'rxjs/operators';

import {Loans, LoanService} from "./loan.service";

@Injectable()
export class NavDetailResolver implements Resolve<Loans> {
  constructor(private loanService: LoanService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Loans> {
    let id = route.paramMap.get('id');

    // console.log('NavDetailResolver is triggered, id is', id);

    return this.loanService.getLoan(id).pipe(
      take(1),
      map(loan => {
        if (loan) {
          return loan;
        } else { // id not found
          this.router.navigate(['/nav']);
          return null;
        }
      })
    );
  }
}
