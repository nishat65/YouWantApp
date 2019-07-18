import React, { Component, Fragment } from "react";
import { Navbar, Nav, Modal, Button, Row, Container, } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { isLoggedIn, logout } from "../../utils";
import { CustomModal } from "../../components";
import config from "../../config";
class Header extends Component {
	componentDidMount() { }
	onLogoutClick = () => {
		this.modalRef.open();
		// logout();
		// this.props.history.push("/");
	};

	onLogoutTrigger = () => {
		logout();
		this.props.history.push("/");
		this.modalRef.close();
	};

	onLogoutCancel = () => {
		this.modalRef.close();
	};

	render() {

		return (
			<Container>
				<Row>
					<Navbar className=" custom-nav" expand="lg">

						<a href="" className="logo">
							<img src={`${config.PUBLIC_URL}/assets/images/logo.svg`} alt="logo-img" /> </a>


						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								{isLoggedIn() ? (
									<Fragment>
										<NavLink className=" custom-button" to="/profile">
											Dashboard
								</NavLink>
										<div className=" custom-button btn-bg-red" onClick={this.onLogoutClick}>
											Logout
								</div>
									</Fragment>
								) : (
										<Fragment>
											<NavLink className=" custom-button" to="/login">
												Login
								</NavLink>
											<NavLink className=" custom-button btn-bg-red" to="/signup">
												Register
								</NavLink>
										</Fragment>
									)}
							</Nav>
						</Navbar.Collapse>
						<CustomModal onRef={ref => (this.modalRef = ref)}>
							<Modal.Header closeButton>
								<Modal.Title>Log Out</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<p className="text-center">Are you sure you want to logout?</p>
							</Modal.Body>

							<Modal.Footer>
								<Button className=" custom-button" onClick={this.onLogoutCancel}>
									Close
						</Button>
								<Button className=" custom-button btn-bg-red" onClick={this.onLogoutTrigger}>
									Yes
						</Button>
							</Modal.Footer>
						</CustomModal>
					</Navbar>
				</Row>
			</Container>
		)
	}
	
}

export default withRouter(Header);
