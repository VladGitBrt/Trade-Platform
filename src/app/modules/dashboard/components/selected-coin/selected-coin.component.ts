import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/core/interfaces/app.state.interface';
import { ICoinData } from '../../model/dashboard.model';
import { Observable } from 'rxjs';
import { coinDataSelector, isSelectedDataLoaded } from '../../store/dashboard.selectors';

@Component({
  selector: 'app-selected-coin',
  templateUrl: './selected-coin.component.html',
  styleUrls: ['./selected-coin.component.css']
})
export class SelectedCoinComponent {
  isDataLoaded$: Observable<boolean>;
  selectedCoinData: Observable<ICoinData>;

  constructor(private store: Store<AppStateInterface>){
    this.selectedCoinData = this.store.select(coinDataSelector);
    this.isDataLoaded$ = this.store.select(isSelectedDataLoaded);
  }
}
