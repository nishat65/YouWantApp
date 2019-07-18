import React from "react";
import { Row, Col, Button , Container } from "react-bootstrap";
const NewsLetter = props => {
	return (
		<section className="subscribe-newsletter section-bottom">
		<Container>
			<div style={{ textAlign: "center" }}>
			<h2 className="sub-tilte ">
					Subscribe to our Weekly <span className="color-red">Newsletter</span>
				</h2>
				<div className="input-newsletter">
				<input className="subscribe " type="text " placeholder="Enter your email" />
					<Button className="rect-button subscribe-button">Subscribe</Button>
				</div>
			</div>
			</Container>
		</section>
	);
};
export default NewsLetter;
