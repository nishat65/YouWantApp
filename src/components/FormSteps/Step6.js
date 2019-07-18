import React, { Component, Fragment } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class Step6 extends Component {
	render() {
		return (
			<div>
				<div className="form-field">
					<p>Please add an Ad title <span className="red-star">*</span></p>
					<InputGroup className="mb-3">
						<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
					</InputGroup>
				</div>
				<div className="form-field">
					<p>Please add mileage</p>
					<InputGroup className="mb-3">
						<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
					</InputGroup>
				</div>
				<div className="form-field">
					<p>Please add color</p>
					<InputGroup className="mb-3">
						<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
					</InputGroup>
				</div>
				<div className="form-field">
					<p>Please add registration number</p>
					<InputGroup className="mb-3">
						<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
					</InputGroup>
				</div>
				<div className="form-field">
					<p>Please add Price ($ only)</p>
					<InputGroup className="mb-3">
						<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
					</InputGroup>
				</div>
			</div>
		);
	}
}

export default Step6;
