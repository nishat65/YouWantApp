import { isLoggedIn } from "../../utils";
import {Route,Redirect} from 'react-router-dom';
import React from 'react';
import { ScrollRestoration } from "../../components"

const PrivateRoute = ({ component: Component, ...rest }) => (
 <Route
		{...rest}
		render={props => {
			return isLoggedIn() ?
				<ScrollRestoration {...props}>
					<Component {...props} />
				</ScrollRestoration>
				:
					<Redirect to={{ pathname: `/` }} />;
		}}
	/>
);

export default PrivateRoute;
