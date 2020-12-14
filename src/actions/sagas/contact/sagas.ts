import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import ContactActions from 'actions/redux/contact';
import { Contact, GetContactsAction } from 'actions/redux/contact/interfaces';
import api from 'requests';

export function* getContactFromApi(action: GetContactsAction) {
	const response: Promise<AxiosResponse> = yield call(api.getContact);

	if (response) {
		yield put(ContactActions.setContact(response));
	}

}

