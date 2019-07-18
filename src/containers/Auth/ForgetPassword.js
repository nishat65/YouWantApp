import React, { Component, Fragment } from "react";
import { InputGroup, Row, Col, Container, FormControl,FormGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Validator from '../../utilities/validations/ForgetPassword';
import actions from '../../actions';
import { toast } from 'react-toastify';
import config from "../../config";
import { ErrorToolTip } from "../../components";
import LoadingButton from "react-bootstrap-button-loader";


class ForgetPassword extends Component {

	state = {
		email: "",
		error: "",
		loading: false
	}

	onEmailEnter = (e) => {
		let { error } = this.state;
		error = "";
		this.setState({ email: e.target.value, error });
	}

	isValidData = () => {
		let { email } = this.state;
		let dataValidated = Validator({ email });
		this.setState({ error: dataValidated.errors.email })
		return dataValidated.isValid;
	}
	onEmailSubmit = () => {
		if (this.isValidData()) {

			this.setState({ loading: true });
			actions.forgetPassword({ email: this.state.email }).then(res => {
				this.setState({ loading: false });
				toast.success(res && res.message);
				this.props.history.push("/");
			}).catch(error => {
				toast.error(error.response && error.response.data && error.response.data.message, {
					className: "toast-danger",
				})
				this.setState({ loading: false });
			})
		}
	}
	render() {
		const { email, error } = this.state;
		return (
			<Container>
				<Row className="justify-content-sm-center forget-password py-5">
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
								<h4 style={{ textAlign: "center" }}>Forget Password</h4>
							</div>
							<FormGroup>
								<label>Enter your email<span className="red-star">*</span></label>

								<FormControl
									onChange={this.onEmailEnter}
									value={email}
									placeholder="enter your email"
									aria-label="Default"
									aria-describedby="inputGroup-sizing-default"
								/>

								{error ? <ErrorToolTip error={error} /> : null}
								{/* {error} */}
							</FormGroup>

							<LoadingButton
								className="defaultRedButtonColor rect-button"
								onClick={this.onEmailSubmit}
								block
								loading={this.state.loading}
							>
								Submit
								</LoadingButton>
						</div>
						{/* <div className="already-account">
							Password reset link will be sent to the above email
						</div> */}
					</Col>
				</Row>
			</Container>
		);
	}
}
const mapStateToProps = store => store;

export default ForgetPassword;
