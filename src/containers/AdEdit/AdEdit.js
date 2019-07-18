import React, { Component } from "react";
import { Row, Col, Container, InputGroup, FormControl, FormGroup, Form } from "react-bootstrap";
import actions from "../../actions";

class AdEdit extends Component {
	state = {
		adData: {
			title: "",
			mileage: "",
			color: "",
			price: "",
            brand: "",
            model: "",
		},
		apiData: {}
	};
	componentDidMount() {
		const id = this.props.match.params.id;
		actions
			.getAdDetail({ id })
			.then(res => {
				let adDetail = res.ads[0];
				let adData = { ...this.state.adData };
				adData.title = adDetail.title;
                adData.brand = adDetail.brand;
                adData.model = adDetail.model;
                adData.year = adDetail.year;
				this.setState({ adData });
			})
			.catch(error => {
			});
	}
	onInputChange = e => {
		const adData = { ...this.state.adData };
		adData[e.target.name] = e.target.value;
		this.setState({ adData });
	};
	render() {
		const { adData } = this.state;
		const { title, mileage, color, registration, price, brand,model,year } = adData;
		return (
			<Container>
				<div>
					<label>Title</label>
					<InputGroup className="mb-3">
						<FormControl
							onChange={this.onInputChange}
							value={title}
							name="title"
							placeholder="enter your email"
							aria-label="Default"
							aria-describedby="inputGroup-sizing-default"
						/>
					</InputGroup>
				</div>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Select Make</Form.Label>
					<Form.Control disabled as="select">
						<option>{brand}</option>
					</Form.Control>
				</Form.Group>
                <Form.Group controlId="formGridAddress1">
					<Form.Label>Select Model</Form.Label>
					<Form.Control disabled as="select">
						<option>{model}</option>
					</Form.Control>
				</Form.Group>
                <Form.Group controlId="formGridAddress1">
					<Form.Label>Select Year</Form.Label>
					<Form.Control disabled as="select">
						<option>{year}</option>
					</Form.Control>
				</Form.Group>
			</Container>
		);
	}
}

export default AdEdit;
