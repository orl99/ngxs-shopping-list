import { Component, OnInit } from '@angular/core';

// NGRX
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction } from '../store/actions/shopping.actions';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { AppState } from './../store/models/app-state.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  name: string;

  shoppingItems$: Observable<ShoppingItem[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingItems$ = this.store.select(store => store.shopping);
    this.store.dispatch(new AddItemAction({id: '42343431423-35353535546', name: 'tostadas-light'}));
  }

  public submitShoppingList(formValue: {name: string}) {
    console.log('ngFormValue', formValue);
    const uniqueId = `${new Date().getUTCMilliseconds() * 10000}`;
    this.store.dispatch(new AddItemAction({id: uniqueId, name: formValue.name}));
  }

  public deleteItemList(itemId: string) {
    console.log('item id', itemId);
    this.store.dispatch(new DeleteItemAction(itemId));
  }


}
