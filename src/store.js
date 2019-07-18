import {createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// A nice helper to tell us if we're on the server
export const isServer = !(
	typeof window !== "undefined" &&
	window.document &&
	window.document.createElement
);

const enhancers = [];

// Dev tools are helpful
if (process.env.NODE_ENV === "development" && !isServer) {
	const devToolsExtension = window.devToolsExtension;

	if (typeof devToolsExtension === "function") {
		enhancers.push(devToolsExtension());
	}
}
const composedEnhancers = compose(
	applyMiddleware(thunk),
	...enhancers
);

// Do we have preloaded state available? Great, save it.
const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

// Delete it once we have it stored in a variable
if (!isServer) {
	delete window.__PRELOADED_STATE__;
}

const store = createStore(reducer, initialState, composedEnhancers);
export default store;
