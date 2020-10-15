import { ShoppingAction, ShoppingActionTypes } from './../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

const initialState: Array<ShoppingItem> = [
    {
        id: '211244-09878',
        name: 'Diet-Coke'
    },
];

export function ShoppingReducer(
    state: ShoppingItem[] = initialState,
    action: ShoppingAction
) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case ShoppingActionTypes.DELETE_ITEM:
            return deleteItemInState(state, action.payload);
        default:
            return state;
    }
}


// Helper Functions
const deleteItemInState = (state: ShoppingItem[] = initialState, id: string): ShoppingItem[] => {
    const newItemsArray = state.filter(el => el.id !== id);
    console.log('newItemsArray');
    return newItemsArray;
}

