import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store'; // select data from the state.
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private _store: Store<number>) {
    this.count$ = _store.pipe(select('count'));
  }

  increment() {
    this._store.dispatch(new Increment());
  }

  decrement() {
    this._store.dispatch(new Decrement());
  }

  reset() {
    this._store.dispatch(new Reset());
  }

}
