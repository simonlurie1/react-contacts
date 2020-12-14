import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	ContactState, TypesNames, ActionCreator, SetContactsAction
} from './interfaces';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	setContact: ['contactsList'],
	getContact: []
});

export const ContactTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<ContactState>({
	contact: {}
});

/* ------------- Selectors ------------- */

export const contactSelector = {
	getContactsData: (state: ApplicationState) => state.contact
};

/* ------------- Reducers ------------- */

const setContactReducer = (state: ImmutableObject<ContactState>, action: SetContactsAction) => {
	const { contactsList } = action;
	return state.merge({ contactsList });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer<any, any>(INITIAL_STATE, {
	[ContactTypes.SET_CONTACT]: setContactReducer
});
