import { combineReducers, Reducer } from 'redux';

import baseReducers, { BaseApplicationState } from '@base/features/base-reducers';
import { CatalogState } from './catalog/interfaces';
import { CartState } from './cart/interfaces';
import { ContactState } from './contact/interfaces';


export interface ApplicationState extends BaseApplicationState {
	cart: CartState;
	catalog: CatalogState;
	contact: ContactState;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	...baseReducers,

	cart: require('./cart').reducer,
	catalog: require('./catalog').reducer,
	contact: require('./contact').reducer
});

export default rootReducer;
