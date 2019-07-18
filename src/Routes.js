import React, { Component, Fragment } from "react";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Loadable from "react-loadable";
import { PublicRoute, PrivateRoute, Header, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { scrollIntoView } from "./utils";

const Login = Loadable({
	loader: () => import(/* webpackChunkName: "login" */ "./containers/Auth/Login"),
	loading: () => null,
	modules: ["login"]
});
const Signup = Loadable({
	loader: () => import(/* webpackChunkName: "signup" */ "./containers/Auth/Signup"),
	loading: () => null,
	modules: ["signup"]
});
const Home = Loadable({
	loader: () => import(/* webpackChunkName: "home" */ "./containers/Home/Home"),
	loading: () => null,
	modules: ["home"]
});
const Confirmation = Loadable({
	loader: () => import(/* webpackChunkName: "home" */ "./containers/Confirmation/confirmation"),
	loading: () => null,
	modules: ["Confirmation"]
});

const Verification = Loadable({
	loader: () => import(/* webpackChunkName: "home" */ "./containers/Verification/Verification"),
	loading: () => null,
	modules: ["Verification"]
});

const Search = Loadable({
	loader: () => import(/* webpackChunkName: "search" */ "./containers/Search/Search"),
	loading: () => null,
	modules: ["search"]
});

const ForgetPassword = Loadable({
	loader: () => import(/* webpackChunkName: "forget" */ "./containers/Auth/ForgetPassword"),
	loading: () => null,
	modules: ["forget"]
});

const Profile = Loadable({
	loader: () => import(/* webpackChunkName: "profile" */ "./containers/Auth/Profile"),
	loading: () => null,
	modules: ["profile"]
});

const changePassword = Loadable({
	loader: () => import(/* webpackChunkName: "changePassword" */ "./containers/Auth/ChangePassword"),
	loading: () => null,
	modules: ["changePassword"]
});

const AdEdit = Loadable({
	loader: () => import(/* webpackChunkName: "adEdit" */ "./containers/AdEdit/AdEdit"),
	loading: () => null,
	modules: ["adEdit"]
});

const AdDetail = Loadable({
	loader: () => import(/* webpackChunkName: "adDetail" */ "./containers/AdDetail/AdDetail"),
	loading: () => null,
	modules: ["AdDetail"]
});

const SellCar = Loadable({
	loader: () => import(/* webpackChunkName: "sellCar" */ "./containers/SellCar/SellCar"),
	loading: () => null,
	modules: ["SellCar"]
});

const Author = Loadable({
	loader: () => import(/* webpackChunkName: "author" */ "./containers/Author/Author"),
	loading: () => null,
	modules: ["Author"]
});

const HowItWork = Loadable({
	loader: () => import(/* webpackChunkName: "howItWork" */ "./containers/HowItWork/HowItWork"),
	loading: () => null,
	modules: ["HowItWork"]
});

const ContactUs = Loadable({
	loader: () => import(/* webpackChunkName: "contactUs" */ "./containers/ContactUs/ContactUs"),
	loading: () => null,
	modules: ["ContactUs"]
});

const AboutUs = Loadable({
	loader: () => import(/* webpackChunkName: "aboutUs" */ "./containers/AboutUs/AboutUs"),
	loading: () => null,
	modules: ["AboutUs"]
});


export default class Routes extends Component {

	constructor(props) {
		super(props);
		this.trackScrolling = this.trackScrolling.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.trackScrolling);
		this.trackScrolling();
	}

	scrollToTop = () => {
		scrollIntoView("root");
	}

	trackScrolling() {
		let element = document.getElementById("Bottom-Scroll-Button");

		if (window.pageYOffset > 300 && element) {
			element.style.display = "inline-block";
		} else if (element){
			element.style.display = "none";
		}
	}

	
	render() {
		const { PUBLIC_URL = "" } = process.env;

		return (
			<BrowserRouter basename={`${PUBLIC_URL}`}>
				<Fragment>
					<Header />
					<Switch>
						<PublicRoute path="/" exact component={Home} />
						<PublicRoute path="/confirm_user/:token" component={Confirmation}/>
						<PublicRoute path="/login" exact component={Login} />
						<PublicRoute path="/signup" exact component={Signup} />
						<PublicRoute path="/search" exact component={Search} />
						<PublicRoute path="/forget" exact component={ForgetPassword} />
						<PublicRoute path="/verification" exact component={Verification} />
						<PublicRoute path="/contact_us" exact component={ContactUs} />
						<PublicRoute path="/about_us" exact component={AboutUs} />
						<PublicRoute path="/howitwork" exact component={HowItWork} />
						<PrivateRoute path="/profile" exact component={Profile} />
						<PrivateRoute path="/changepassword" exact component={changePassword} />
						<PrivateRoute path="/adedit/:id" exact component={AdEdit} />
						<PrivateRoute path="/search/ad_info/:id" exact component={AdDetail} />
						<PrivateRoute path="/sellyourcar/:id" exact component={SellCar} />
						<PrivateRoute path="/author" exact component={Author} />
					</Switch>
					<Footer />
					<ToastContainer/>
					<div id="Bottom-Scroll-Button" className="Bottom-Scroll-Button" onClick={this.scrollToTop}>
						Button
					</div>
				</Fragment>
			</BrowserRouter>
		);
	}
}
