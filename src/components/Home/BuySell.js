import React, { Component } from "react";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import config from "../../config";
import { AdPost } from "../../components";

class BuySell extends Component {

	state = {
		modalShow: false
	}

	modalClose = () => {
		this.setState({ modalShow: false });
	}

	onPostAdClick = () => {
		this.setState({ modalShow: true });
	};

	adPostRequestHandler = () => {
		this.setState({ adPostRequest: true });
	};

	adPostRequestSubmit = () => {
		this.modalClose();
		this.setState({ adPostRequest: false, tabValue: 3 });
	};

	render() {
		const { modalShow } = this.state;
		const { carBrands = {}} = this.props;
		return (
			<section className="buy-sell back-color-style section-bottom">
				<Container>
					<Row>
						<Col md={12} lg={6}>
							<Row>
								<div className="seller-box">
									<Col lg={4} sm={4} className="text-left left-side">
										<img src={`${config.PUBLIC_URL}/assets/images/buy.png`} />
									</Col>
									<Col lg={8} sm={8} className="right-side">
										<h4 className="font-bold">Are you looking for trusted sellers ?</h4>
										<p>Look at the advertisments and get your dream to buy a car come true</p>
										<button className="rect-button" onClick={this.onPostAdClick}>POST AN AD</button>
									</Col>
								</div>
							</Row>
						</Col>

						<Col md={12} lg={6} className="pull-right">
							<Row>
								<div className="seller-box">
									<Col lg={4} sm={4} className="text-left left-side">
										<img src={`${config.PUBLIC_URL}/assets/images/sell.png`} />
									</Col>
									<Col lg={8} sm={8} className="right-side">
										<h4 className="font-bold">Are you looking for trusted sellers ?</h4>
										<p>Look at the advertisments and get your dream to buy a car come true</p>
										<button
											className="rect-button"
											onClick={() => { this.props.history.push("/search") }}
										>
											SEARCH NOW
									</button>
									</Col>
								</div>
							</Row>

						</Col>
					</Row>
					<Modal show={modalShow} size="xl" centered onHide={this.modalClose} className="modal-adPost">
						<Row>
							<Col md={12} lg={8} sm={12}>
								<Modal.Header className="d-lg-none custom-close" closeButton />

								<AdPost
									modalClose={this.modalClose}
									adPostRequestHandler={this.adPostRequestHandler}
									adPostRequestSubmit={this.adPostRequestSubmit}
									carBrands={(carBrands && carBrands) || []}
								/>
							</Col>
							<Col lg={4} sm={12} className=" d-none d-lg-block">
								<Modal.Header className="custom-close" closeButton />
								{/* This s/ a Column */}
								<div className="popup-sidebar">
									<h3 className="side-title">
										What to expect?
									</h3>
									<span className="aside-lead">
										Up to 3 free quotes within 24 hours from qualified businesses
									</span>
									<div className="aside-icon">
										<img src="http://demos.ths.agency/youwant/wp-content/plugins/postads/assets/img/81293.png" />
									</div>
									<div className="aside-stats">
										<span data-bind="text: state.stats">
											10,664
										</span>
										<span>others like you have posted<br />a job this week</span>
									</div>
								</div>
							</Col>
						</Row>
					</Modal>
				</Container>
			</section>
		);
	}
};
export default BuySell;
