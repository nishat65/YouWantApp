import React, { Component, Fragment } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Step4 = props => {
	let { name, phone, onInputChange, createNewUser, errors } = props;

	return (
		<div>
			<h5>Please Select Series</h5>
			<div className="form-field">
				<p>Name</p>
				<InputGroup className="mb-3">
					<FormControl
						aria-label="Default"
						value={name}
						name="name"
						onChange={onInputChange}
						aria-describedby="inputGroup-sizing-default"
						className={`${errors.name ? "boundary-error" : ""}`}
						maxLength="30"
					/>
				</InputGroup>
				{/* <div className="errors">
					{errors.name}
				</div> */}
			</div>
			<div className="form-field">
				<p>Phone</p>
				<InputGroup className="mb-3">
					<FormControl
						aria-label="Default"
						value={phone}
						name="phone"
						onChange={onInputChange}
						aria-describedby="inputGroup-sizing-default"
						className={`${errors.phone ? "boundary-error" : ""}`}
						maxLength="15"
					/>
				</InputGroup>
				{/* <div className="errors">
					{errors.phone}
				</div> */}
			</div>
		</div>
	);
};

export default Step4;
