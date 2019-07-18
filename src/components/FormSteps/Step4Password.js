import React, { Component, Fragment } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { ErrorToolTip } from "../../components";

const Step4Password = (props) => {
	let { onInputChange, password, errors } = props;
	return (
		<div>
			<h5>Verify Password</h5>
			<div className="form-field">
				<p>Password</p>
				<InputGroup className="mb-3">
					<FormControl
						aria-label="Default"
						type="password"
						value={password}
						name="password"
						onChange={onInputChange}
						aria-describedby="inputGroup-sizing-default"
						className={`${props.toolTipShow ? "boundary-error" :  ""}`}
					/>
				</InputGroup>
				{
					errors.password ? 
					<ErrorToolTip error={errors.password} /> :
					null
				}
			</div>
		</div>
	);
};

export default Step4Password;
