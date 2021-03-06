import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from "@ngrx/store";
import { LOAD_BOOKS, ReadyBooks } from './books.actions';


@Injectable()
export class BookEffects {
 // Listen for the LOAD_BOOKS action
 @Effect()
 login$: Observable<Action> = this.actions$
   .ofType(LOAD_BOOKS)
   .pipe(
       map(action => new ReadyBooks())
    );

 constructor(private actions$: Actions) {}
}

