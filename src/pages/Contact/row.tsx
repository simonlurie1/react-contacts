import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { Dispatch } from 'redux';
import { ContactI, Friend } from 'actions/redux/contact/interfaces';
import './style.scss';

interface Props {
	contact: ContactI;
}

interface State {
	open: Boolean;
}

class Row extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.handleCollapse = this.handleCollapse.bind(this);
		this.state = {
			open: false,
		};
	}

	handleCollapse() {
		const { open } = this.state;
		this.setState({ open: !open });

	}

	render() {
		const { contact } = this.props;
		const { open } = this.state;
		const { name, address, age, phone, email, friends } = contact;
		return (
			<>
				<tr onClick={this.handleCollapse}>
					<td>{name?.first}</td>
					<td>{name?.last}</td>
					<td>{address}</td>
					<td>{age}</td>
					<td>{phone}</td>
					<td>{email}</td>

				</tr>
				<tr className={`collapse ${open && 'show'}`}>
					<td colSpan={6}>
						{friends && friends.map((friend: Friend) => {
							return (<div id={friend.id?.toString()} key={friend.id}>{friend.name}</div>);
						})}
					</td>
				</tr>
			</>
		);
	}
}

export default baseConnect(Row,
	(state: ApplicationState) => {
		return {};
	},
	(dispatch: Dispatch) => ({}),
);

