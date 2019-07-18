import React, { Component, Fragment } from "react";
import { InputGroup, Row, Col, Container, FormControl, Form, Button, Tooltip, FormGroup } from "react-bootstrap";
import validator from "../../utilities/validations/Login";
import { Link } from "react-router-dom";
import actions from "../../actions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import config from "../../config";
import { PostSubmitLoader, ErrorToolTip } from "../../components"
import LoadingButton from "react-bootstrap-button-loader";
import { saveObject, removeObject, getObject } from "../../utils";
const ToastError = props => {
	return <div style={{ color: "white" }}>{props.data}</div>;
};
class Login extends Component {
	state = {
		email: "",
		password: "",
		errors: {},
		fetching: false,
		login_loading: false,
		isChecked: false,
	};

	componentDidMount() {
		const remember = getObject(`remember`);
		const path = this.props.location.pathname;
		if (!remember) {
			return false;
		}

		const data = JSON.parse(window.atob(remember));
		// console.log(data);
		if (path != `/login`) {
			return false;
		}
		let newUser;
		if (remember) {
			newUser = {
				email: data.email,
				password: data.password,
			}
		} else {
			newUser = {
				email: "",
				password: ""
			};
		}

		this.setState({
			checked: remember ? true : false,
			email: newUser.email,
			password: newUser.password
		}, () => {

		});
	}

	onInputChange = e => {
		let { errors } = this.state;
		const { name, value } = e.target;
		errors[name] = "";
		this.setState({ [e.target.name]: e.target.value });
	};

	isValidData = data => {
		const validations = validator(data);
		this.setState({ errors: validations.errors });
		return validations.isValid;
	};

	login = () => {
		const { email, password } = this.state;
		let user = { email, password };
		if (this.isValidData({ email, password })) {
			
			if (this.state.isChecked) {
				saveObject(`remember`, window.btoa(JSON.stringify(user)));
			}
			else {
				const remember = getObject(`remember`);
				if (remember)
					removeObject(`remember`);
			}

			this.setState({ fetching: true, login_loading: true });
			actions
				.login({ email, password })
				.then(res => {
					this.setState({ login_loading: false });
					toast.success(res.message, {
						position: toast.POSITION.TOP_RIGHT
					});
					this.props.history.push("/");
				})
				.catch(error => {
					toast.error(error.response && error.response.data && error.response.data.message || "Internal Sever Error", {
						className: "toast-danger"
					});	
					this.setState({ fetching: false, login_loading: false });
				});
		}
	};

	handleChecked = () => {
		const { isChecked } = this.state;
		this.setState({
			isChecked: !isChecked
		})
	}

	render() {
		const { email, password, errors, fetching, login_loading } = this.state;
		return (
			<Fragment>
				<Container>
					<Row className="justify-content-sm-center py-5">
						<Col md={6} className=" d-none d-md-block image-left">
							<img
								className="auth-img"
								src={`${config.PUBLIC_URL}/assets/images/authBack.png`}
								alt=""
							/>
						</Col>
						<Col md={6} className="m-auto" className="form-custom nopadding">
							<div className="auth-card">
								<div className="login-header">
									<h4 style={{ textAlign: "center" }}>Log In</h4>
								</div>
								<FormGroup>
									<label>Email<span className="red-star">*</span></label>

									<FormControl
										value={email}
										onChange={this.onInputChange}
										name="email"
										placeholder="Enter Email"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										className={`input-auth-text ${errors.email ? "boundary-error" : null}`}
									/>
									{errors.email ? (
										<ErrorToolTip error={errors.email}>
										</ErrorToolTip>
									) : null}
									<div className="mb-3 error-msg">{" "}</div>
								</FormGroup>
								<FormGroup>
									<label>Password<span className="red-star">*</span></label>

									<FormControl
										onChange={this.onInputChange}
										value={password}
										name="password"
										type="password"
										placeholder="Enter Password"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										className={`input-auth-text ${errors.password ? "boundary-error" : null}`}
									/>
									{errors.password ? (
										<ErrorToolTip error={errors.password}>
										</ErrorToolTip>
									) : null}
									<div className="mb-3 error-msg">{""}</div>
									</FormGroup>
								<div className="remember">
								
										<div id="formGridCheckbox"  onClick={this.handleChecked}>
											<Form.Check
												type="checkbox"
												label="Remember Me"
												checked={this.state.isChecked}
											/>
										</div>
									

									
											<Link className="defaultRedColor" to="/forget">
												Forgot Password?
										</Link>
										
								</div>
								
										<LoadingButton
											className="rect-button"
											block
											onClick={this.login}
										// loading = {login_loading}	
										>

											LOGIN
									</LoadingButton>
								
									<div className="auth-bottom already-account">
										Don't have an account?
									<Link className="defaultRedColor" to="/signup">
											{" "}
											Register
									</Link>
									</div>
								</div>
						</Col>
					</Row>
				</Container>
					{fetching && <PostSubmitLoader loading={fetching} />}
			</Fragment>
				);
			}
		}
		const mapStateToProps = store => store;
		
		export default Login;
