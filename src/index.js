import React from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/styles.scss";
import "./assets/font-icon/font/flaticon.css";
import "./assets/custom.scss";
import "./init";
import store from "./store";
import Routes from "./Routes";
import { Frontload } from "react-frontload";
import Loadable from "react-loadable";

const Application = (
	<Provider store={store}>	
		<Frontload noServerRender={true}>
			<Routes />
		</Frontload>
	</Provider>
);

const root = document.querySelector("#root");

if (root.hasChildNodes() === true) {
	// If it's an SSR, we use hydrate to get fast page loads by just
	// attaching event listeners after the initial render
	Loadable.preloadReady().then(() => {
		hydrate(Application, root);
	});
} else {
	// If we're not running on the server, just render like normal
	render(Application, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
