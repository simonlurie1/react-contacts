import { all, fork, takeLatest } from 'redux-saga/effects';
import * as Sagas from './sagas';
 import { ContactTypes } from 'actions/redux/contact';

function* watchGetContact() {
	 yield takeLatest(ContactTypes.GET_CONTACT, Sagas.getContactFromApi);
}

function* contactSaga() {
	yield all([
		fork(watchGetContact)
	]);
}

export default contactSaga;