import { Action } from 'redux';

export interface ContactState {
	contact?: ContactI;
}

export interface Name {
	first?: string;
	last?: string;
}

export interface Friend {
	id?: number;
	name?: string;
}

export  interface ContactI {
	id?: string;
	picture?: string;
	age?: number;
	eyeColor?: string;
	name?: Name;
	company?: string;
	email?: string;
	phone?: string;
	address?: string;
	about?: string;
	friends?: Friend[];
}


export enum TypesNames {
	SET_CONTACT = 'SET_CONTACT',
	GET_CONTACT = 'GET_CONTACT'
}

export interface ActionCreator {
	setContact: (contact: ContactI) => SetContactsAction;
	getContact: () => GetContactsAction;
}

export interface SetContactsAction extends Action<TypesNames.SET_CONTACT> {
	contactsList: ContactI;
}
export interface GetContactsAction extends Action<TypesNames.GET_CONTACT> { }