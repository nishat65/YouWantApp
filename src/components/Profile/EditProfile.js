import React, { Fragment } from "react";
import { Col, Row, InputGroup, FormControl, Button } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'
import { PostSubmitLoader } from "../../components";

const EditProfile = props => {
	const { name = "", phone = "", onInputChange, email = "", errors, profileUpdate } = props;
	return (
		<Fragment>
			<h2 className="defaultRedColor">Edit Profile </h2>
			<Row>
				<Col sm={12} md={6}>
					<label>Name<span className="red-star">*</span></label>
					<InputGroup>
						<FormControl
							value={name}
							onChange={onInputChange}
							name="name"
							maxLength={50}
							placeholder="Your Name"
							aria-label="Default"
							aria-describedby="inputGroup-sizing-default"
						/>
					</InputGroup>
					<div className="mb-3 danger">{errors.name || " "}</div>
				</Col>
				<Col sm={12} md={6}>
					<label>Contact Number</label>
					<InputGroup>
						<FormControl
							value={phone}
							onChange={onInputChange}
							name="phone"
							placeholder="Your Contact Number"
							aria-label="Default"
							aria-describedby="inputGroup-sizing-default"
						/>
					</InputGroup>
					<div className="mb-3 danger">{errors.phone || " "}</div>
				</Col>
				<Col sm={12} md={6}>
					<label>Email<span className="red-star">*</span></label>
					<InputGroup className="">
						<FormControl
							value={email}
							onChange={onInputChange}
							name="email"
							maxLength={200}
							placeholder="enter your email"
							aria-label="Default"
							aria-describedby="inputGroup-sizing-default"
						/>
					</InputGroup>
					<div className="mb-3 danger">{errors.email || " "}</div>
				</Col>
				<Col sm={12} md={12} className="change-password-update">
			<div>
						<span
							className="defaultRedColor"
							to="/changepassword"
							onClick={() => props.history.push("/changepassword")}
							className="span_link"
						>
							Change Password
				</span>
				</div>
					<Button className="defaultRedButtonColor rect-button" onClick={profileUpdate}>
						Profile Update
					</Button>
				</Col>
			</Row>
		</Fragment>
	);
};

export default withRouter(EditProfile);
