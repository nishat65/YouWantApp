import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import config from "../../config";
const HowItWorks = props => {
	return (
		<section className="how-it-works pt-5">
			<Container>
				<Row>
					<Col className="text-center">
						<h2 className="sub-tilte">
							How <span className="color-red">Youwant</span> Works
						</h2>
						<h5 className="sub-heading my-4">
							Connecting you to right experts, first time and every time
						</h5>
					</Col>
				</Row>
				<Row className="servic-box-text ">
					<Col lg={4} md={12} sm={12} xs={12} className="service-box text-center ">
						<div className="how-it-work">
							<img src={`${config.PUBLIC_URL}/assets/images/work1.png`} />
							<h5>Tell us which car you want to sell</h5>
							<p>
								Make a free account on Youwant and upload your Ad to tell everybody which car you
								want to sell.
							</p>
						</div>
					</Col>
					<Col lg={4} md={12} sm={12} xs={12} className="service-box text-center curved-line ">
						<div className="how-it-work">
							<img src={`${config.PUBLIC_URL}/assets/images/work2.png`} />
							<h5>Tell us which car you want to sell</h5>
							<p>Seller can search what he want to sell and can contact the respective buyer.</p>
						</div>
					</Col>
					<Col lg={4} md={12} sm={12} xs={12} className="service-box text-center ">
						<div className="how-it-work">
							<img src={`${config.PUBLIC_URL}/assets/images/work3.png`} />
							<h5>Win Win <br/> Situation</h5>
							<p>
								Seller can find trusted buyers here and buyers can find the quick sellers as per
								their budget.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default HowItWorks;
