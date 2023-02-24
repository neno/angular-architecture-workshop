import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../types';
import { favoritesCountSelector } from './store/selectors';

@Component({
  selector: 'app-large',
  templateUrl: './large.component.html',
})
export class LargeComponent {
  count$ = this.store.select(favoritesCountSelector);

  constructor(private store: Store<IAppState>) { }
}
