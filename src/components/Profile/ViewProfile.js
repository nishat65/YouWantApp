import React, { Fragment } from "react";
import { Col, Row, InputGroup, FormControl } from "react-bootstrap";
const ViewProfile = props => {
	const { name = "", phone = "", email = "" } = props;
	return (
		<Row>
			<Col className="view-profile">

				<div className="login-header">
					<h2 className="defaultRedColor">View Profile</h2>
				</div>
				<dl className="dl-horizontal">
					<div>
						<dt>
							<strong>Name</strong>
						</dt>
						<dd>
							{name || "Not Defined"}
						</dd>
					</div>
					<div>
						<dt>
							<strong>Contact Number</strong>
						</dt>
						<dd>
							{phone || "Not Defined"}
						</dd>
					</div>
					<div>
						<dt>
							<strong>Email</strong>
						</dt>
						<dd>
							{email || "Not Defined"}
						</dd>
					</div>	
				
				</dl>
			</Col>
		</Row>
	);
};

export default ViewProfile;
