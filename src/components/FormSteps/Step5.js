import React, { Component, Fragment } from 'react';

class Step5 extends Component {
	render() {
		return (
			<div>
				<h5>Please Select Transmission</h5>
				<div className="form-field">
					<input type="radio" name="model" checked value="124" /> 6 SP AUTOMATIC
				</div>
				<div className="form-field">
					<input type="radio" name="model" value="256" /> 6 SP MANUAL
				</div>
			</div>
		)
	}
}

export default Step5;