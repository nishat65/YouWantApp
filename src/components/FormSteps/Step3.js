import React, { Component, Fragment } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { ErrorToolTip } from "../../components"; 

const Step3 = (props) => {
	let { email, onEmailSubmit, onInputChange, errors } = props;
	return (
		<div className="modalof-form">
			<div>
				<h5>Please Enter Email</h5>
					<div className="form-field">
						<p>Email</p>
						<InputGroup className="mb-3">
							<FormControl
								aria-label="Default"
								value={email}
								name="email"
								onChange={onInputChange}
								aria-describedby={`inputGroup-sizing-default`}
								className={`${props.toolTipShow ? "boundary-error" : ""}`}
								placeholder = "Please Enter Email"
							/>
							</InputGroup>
							{
								errors.email ?
									<ErrorToolTip error={errors.email} />
									: null
							}
					</div>
			</div>
		</div>
	);
};

export default Step3;
