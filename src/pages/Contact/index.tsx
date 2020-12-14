import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import ContactActions, { contactSelector } from 'actions/redux/contact';
import { Dispatch } from 'redux';
import { ContactI, Friend } from 'actions/redux/contact/interfaces';
import './style.scss';
import Row from './row';

interface Props {
	contacts: Array<ContactI>;
	getContact: Function;
}

class Contact extends React.Component<Props> {
	constructor(props: Props) {
		super(props);

		this.handleCollapse = this.handleCollapse.bind(this);
	}

	handleCollapse(contact: ContactI) {


	}

	componentDidMount() {

		const { getContact } = this.props;
		getContact();
	}

	render() {
		const { contacts } = this.props;

		return (
			<div className="contactsPage">
				Contacts New Container

				<table>
					<thead>
					<th>first name</th>
					<th>last name</th>
					<th>address</th>
					<th>age</th>
					<th>phone</th>
					<th>email</th>

					</thead>
					<tbody>
					{contacts?.contactsList?.map((contact) => {
						return (<Row contact={contact} key={contact.id} />);
					})}

					</tbody>
				</table>
			</div>
		);
	}
}

export default baseConnect(Contact,
	(state: ApplicationState) => {
		return {
			contacts: contactSelector.getContactsData(state),
		};
	},
	(dispatch: Dispatch) => ({
		getContact: () => dispatch(ContactActions.getContact()),
	}),
);

