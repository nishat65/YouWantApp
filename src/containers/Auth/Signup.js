import React, { Component, Fragment } from "react";
import { InputGroup, Row, Col, Container, FormControl, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Validate from "../../utilities/validations/Signup";
import actions from "../../actions";
import { connect } from "react-redux";
import config from "../../config";
import { toast } from "react-toastify";
import { PostSubmitLoader, ErrorToolTip } from "../../components"
class Signup extends Component {

	state = {
		name: "",
		email: "",
		phone: "",
		password: "",
		errors: {},
		termsChecked: false,
		fetching: false
	};

	onInputChange = e => {
		const { name, value } = e.target;
		const reg = /^\d*$/;

		if (name === "phone" && !reg.test(value))
			return;

		let { errors } = this.state;
		errors[name] = "";
		this.setState({ [e.target.name]: e.target.value });
	};

	isValidData = data => {
		const validation = Validate(data);
		this.setState({ errors: validation.errors });
		return validation.isValid;
	};

	signup = () => {
		const { name, email, phone, password, termsChecked } = this.state;
		if (this.isValidData({ name, email, phone, password }) && termsChecked) {
			this.setState({ fetching: true });
			actions
				.signup({ name, email, phone, password })
				.then(res => {
					toast.success(res && res.message);
					this.props.history.push("/verification");
				})
				.catch(error => {
					toast.error(error.response && error.response.data && error.response.data.message, {
						className: "toast-danger"
					});
					this.setState({ fetching: false });
				});
		}
	};

	onChangeCheckbox = (e) => {
		e.persist();
		this.setState({ termsChecked: !this.state.termsChecked });
	}

	render() {
		const { name, email, phone, password, errors, termsChecked, fetching } = { ...this.state };


		return (
			<Fragment>
				<Container>
					<Row className="justify-content-sm-center py-5">
						<Col md={6} className=" d-none d-md-block image-left">
							<img className="auth-img" src={`${config.PUBLIC_URL}/assets/images/authBack.png`} alt="" />
						</Col>
						<Col lg={6} sm={12} md={6} className="form-custom nopadding">
							<div className="auth-card">
								<div className="login-header">
									<h4 style={{ textAlign: "center" }}>REGISTER</h4>
								</div>
								<FormGroup>
									<label>Name<span className="red-star">*</span></label>

									<FormControl
										value={name}
										onChange={this.onInputChange}
										name="name"
										maxLength={50}
										placeholder="Enter Name"
										className={`input-auth-text ${errors.name ? "boundary-error" : null}`}
										maxLength="30"
									/>
									{
										errors.name ? (
											<ErrorToolTip error={errors.name} />
										) : null
									}

								</FormGroup>
								<FormGroup>
									<label>Contact Number<span className="red-star">*</span></label>

									<FormControl
										className={`input-auth-text ${errors.phone ? "boundary-error" : null}`}
										value={phone}
										onChange={this.onInputChange}
										name="phone"
										placeholder="Enter Contact Number"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										maxLength={13}
									/>
									{
										errors.phone ? (
											<ErrorToolTip error={errors.phone} />
										) : null
									}
								</FormGroup>

								<FormGroup>
									<label>Email<span className="red-star">*</span></label>
									<FormControl
										className={`input-auth-text ${errors.email ? "boundary-error" : null}`}
										value={email}
										onChange={this.onInputChange}
										name="email"
										maxLength={200}
										placeholder="Enter Email"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
									/>
									{
										errors.email ? (
											<ErrorToolTip error={errors.email} />
										) : null
									}

								</FormGroup>
								<FormGroup>
									<label>Password<span className="red-star">*</span></label>
									<FormControl
										className={`input-auth-text ${errors.password ? "boundary-error" : null}`}
										value={password}
										onChange={this.onInputChange}
										name="password"
										type="password"
										placeholder="Enter Password"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
									/>
									{
										errors.password ? (
											<ErrorToolTip error={errors.password} />
										) : null
									}
								</FormGroup>
								<div className="remember">
									
									<div id="formGridCheckbox"  onClick={this.onChangeCheckbox} >
											<Form.Check
												type="checkbox" 
												label="I am agreed to Terms & Conditions" 
												checked={termsChecked} 
											/>
										</div>
								</div>

								<Button
									// disabled={!termsChecked}
									className={`rect-button ${!termsChecked ? "btn-disabled" : ""}`}
									block 
									onClick={this.signup}
								>
									REGISTER
								</Button>

								<div className="already-account">
									Already have an account?{" "}
									<Link className="defaultRedColor" to="/login">
										Login
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

export default Signup;
