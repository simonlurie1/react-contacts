import * as React from 'react';
import { Switch } from 'react-router-dom';
import Route from './PageContainer';

/* -------------- Pages --------------- */
import App from '../App';

import Contact from 'pages/Contact';
/* -------------- Routes Paths --------------- */
import RoutesPath from './RoutesPath';

export default (
	<App>
		<Switch>

			<Route
				exact
				path={RoutesPath.CONTACT}
				component={Contact}
			/>
			<Route exact path={RoutesPath.ERROR_PAGE} component={() => <div>error page</div>} />
		</Switch>
	</App>
);
