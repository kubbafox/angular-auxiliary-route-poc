import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';


export class Loans {
  constructor(public id: number, public name: string) { }
}


//Mock Data

const LOANS = [
  new Loans(1, 'Loan 1 - $1000'),
  new Loans(2, 'Loan 2 - $2000'),
  new Loans(3, 'Loan 3 - $3000'),
];


@Injectable()
export class LoanService {
  static MostRecentLoanID = 1;
  private crises$: BehaviorSubject<Loans[]> = new BehaviorSubject<Loans[]>(LOANS);

  getLoans() { return this.crises$; }

  getLoan (id: number | string) {
    return this.getLoans().pipe(
      map(loans => loans.find(loan => loan.id === +id))
    );
  }

}
