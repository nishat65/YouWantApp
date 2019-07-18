import React, { Component, Fragment } from "react";
import { InputGroup, Row, Col, Container, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Validator from "../../utilities/validations/ChangePassword";
import actions from "../../actions";
import { toast } from "react-toastify";
import LoadingButton from "react-bootstrap-button-loader";
import { ErrorToolTip } from "../../components";

class ChangePassword extends Component {
	state = {
		email: "",
		oldPassword: "",
		newPassword: "",
		errors: {},
		loading : false
	};

	onInputChange = e => {
		const { name, value } = e.target;
		let { errors } = this.state;
		errors[name] = "";
		this.setState({ [name]: value });
	};

	isValidData = () => {
		let {oldPassword,newPassword}=this.state;
        let dataValidated= Validator({oldPassword,newPassword});
		this.setState({errors:dataValidated.errors})
		return dataValidated.isValid;
    };
    
	onPasswordSubmit = () => {
		let { oldPassword, newPassword } = this.state;
		if (this.isValidData()) {
			this.setState({ loading: true });
			actions
				.changePassword({ oldPassword, newPassword })
				.then(res => {
					this.setState({ loading: false });
					toast.success(res && res.message);
					this.props.history.push("/");
				})
				.catch(error => {
					this.setState({ loading: false });
					toast.error(error.response && error.response.data && error.response.data.message||"Internal Sever Error", {
						className: "toast-danger"
					});
				});
		}
	};
	render() {
		const { oldPassword,newPassword, errors, loading } = this.state;
		return (
			<Container>
				<Row className="ch-pass">
					<Col md={8} className="m-auto">
						<div className="login-header">
							<h2 className="defaultRedColor">Change Password</h2>
						</div>
						<div	>
							<label>Enter Previous Password <span>*</span></label>
							<InputGroup className="mb-3">
								<FormControl
									onChange={this.onInputChange}
									value={oldPassword}
									name="oldPassword"
									placeholder="Enter Old Password"
									aria-label="Default"
									aria-describedby="inputGroup-sizing-default"
									className={`${errors.oldPassword ? "boundary-error": ""}`}
								/>
							</InputGroup>
							{
								errors.oldPassword ? <ErrorToolTip error={errors.oldPassword}/> : null
							}
						</div>
						<div>
							<label>Enter New Password <span>*</span></label>
							<InputGroup className="mb-3">
								<FormControl
									onChange={this.onInputChange}
                                    value={newPassword}
                                    name="newPassword"
									placeholder="Enter New Password"
									aria-label="Default"
									aria-describedby="inputGroup-sizing-default"
									className={`${errors.newPassword ? "boundary-error" : ""}`}
								/>
							</InputGroup>
							{
								errors.newPassword ? <ErrorToolTip error={errors.newPassword} /> : null
							}
						</div>

						<div>
							<LoadingButton
								className="defaultRedButtonColor rect-button"
								onClick={this.onPasswordSubmit}
								block
								loading={loading}
							>
								Submit
							</LoadingButton>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}
const mapStateToProps = store => store;

export default ChangePassword;
