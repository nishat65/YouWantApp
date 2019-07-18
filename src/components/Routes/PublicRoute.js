import React from 'react';
import { isLoggedIn } from "../../utils";
import { Route, Redirect } from 'react-router-dom';
import { ScrollRestoration } from "../../components";


const PublicRoute = ({ component: Component, ...rest }) => {
	if(isLoggedIn() && (rest.path=="/login" || rest.path=="/signup")){
		return(
			<Redirect to="/" />
		)
	}
	window.scrollTo(0, 0);
	return (
		<Route
			{...rest}
			render={props => {
				return <ScrollRestoration {...props}>
							<Component key={props.location.key} {...props} />;
					   </ScrollRestoration>
			}}
		/>
	);
};

export default PublicRoute;