import React, { Component, Fragment } from "react";
import { Navbar, Nav, Modal, Button, ProgressBar, Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import config from "../../config";
import { assetsPrefix } from "../../constants";
import { toast } from "react-toastify";
import { RiseLoader } from "react-spinners";
import {
	HowItWorks,
	ExploreAd,
	Customer,
	BuySell,
	AdPost,
	Brands,
	ModalPostLoader,
	NewsLetter,
	PostSubmitLoader,
	YourCity
} from "../../components";

import { Async } from "react-select";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import actions from "../../actions";
import { connect } from "react-redux";
import { isLoggedIn } from "../../utils";
import adTitleValidator from "../../utilities/validations/AdPostTitle";
import emailValidator from "../../utilities/validations/ForgetPassword";
import userWithoutPasswordValidator from "../../utilities/validations/UserWithoutLogin";
import { FaLeaf } from "react-icons/fa";
class Home extends Component {
	state = {
		search: {},
		modalShow: false,
		progressValue: 11.11,
		pageArray: [],
		currentObjData: {},
		staticStep: 0,
		userImage: [],
		isDropped: false,
		brandName: "",
		errors: {},
		brandId: "",
		adPostRequest: false,
		carBrands: []
	};

	componentDidMount() {
		actions
			.getCarBrands()
			.then(res => {
				this.setState({ carBrands: res });
			})
			.catch(error => { });
	}

	handleInput = e => {
		if (e) {
			this.setState({
				brandName: e.value,
				brandId: e.id,
				search: e
			});
			return;
		}
		this.setState({ brandName: "" });
	};

	onSearchClick = () => {
		if (this.state.brandName) {
			this.setState({ modalShow: true });
		}
	};
	modalClose = () => this.setState({ modalShow: false });

	loadCarModal = (input, callback) => {
		if (this.props.carsData.brands.length > 0) {
			let carBrands = [...this.props.carsData.brands];
			let searchedBrand = carBrands.filter(brand => {
				if (brand.label.includes(input.toUpperCase())) {
					return brand;
				}
			});
			callback([...searchedBrand]);
		} else {
			setTimeout(() => {
				this.loadCarModal(input, callback);
			}, 800);
		}
	};

	progressValueUpdate = () => {
		this.setState(prev => ({ progressValue: prev.progressValue + 11.11 }));
	};

	adPostRequestHandler = () => {
		this.setState({ adPostRequest: true });
	};

	adPostRequestSubmit = () => {
		this.modalClose();
		this.setState({ adPostRequest: false }, () => {
			this.props.history.push("/profile")
		});
	}
	
	render() {
		let { search, modalShow, progressValue, brandId, brandName, adPostRequest } = this.state;

		return (
			<Fragment>
				<section
					className="home-banner"
					style={{ backgroundImage: `url(${config.PUBLIC_URL}/assets/images/background.png)` }}>
					<Container>
						<Row>
							<Col md={12} lg={{ span: 8, offset: 2 }} className="text-center text-white">
								<h1 className="title">Planning to buy a car?</h1>
								<p className="banner-text">Post your requirements in quick steps with YouWant</p>
							</Col>

							<Col md={12} lg={{ span: 8, offset: 2 }} className="serach-bar">
								<Row>
									<Col md={9} sm={12}  className="serach-input pr-0">
										<Async
											className="banner-input"
											isClearable={true}
											isSearchable={true}
											placeholder={"SELECT CAR"}
											styles={{
												dropdownIndicator: base => ({
													...base,
													display: "none"
												}),
												clearIndicator: base => ({
													...base,
													display: "none"
												}),
												control: base => ({
													...base,
													borderRadius: 0,
													border: 0,
													padding: "5px 0px",
													boxShadow: 0,
													height: '46px',
													"&:hover": {
														border: 0
													}
												})
											}}
											value={search ? search : ""}
											loadOptions={this.loadCarModal}
											onChange={this.handleInput}
										/>
									</Col>
									<Col md={3} sm={12}  className="pl-0">
										<div>
											<Button
												disabled={!brandName ? true : false}
												className={`rect-button uppercase ${!brandName ? "btn-disabled" : ""}`}
												block
												onClick={this.onSearchClick}
											>
												Start Posting
											</Button>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</section>
				<Container>
					<HowItWorks />
				</Container>
				<YourCity />
				<Customer />
				<BuySell
					history={this.props.history}
					props={this.props}
					carBrands={this.state.carBrands && this.state.carBrands.info && this.state.carBrands.info.data || [] }
				/>
				<NewsLetter />
				<Brands />
				<div>
					<Modal
						className="modal-adPost"
						show={modalShow}
						size="xl"
						centered
						onHide={this.modalClose}>
						<Row>
							<Col md={12} lg={8}>
								<Modal.Header className="d-lg-none custom-close" closeButton />
								<AdPost
									adPostRequestHandler={this.adPostRequestHandler}
									adPostRequestSubmit={this.adPostRequestSubmit}
									brandId={brandId}
									brandName={brandName}
								/>
							</Col>
							<Col lg={4} className=" d-none d-lg-block">
								<Modal.Header className="custom-close" closeButton />
								<div className="popup-sidebar">
									<h3 className="side-title">What to expect?</h3>
									<span className="aside-lead">Up to 3 free quotes within 24 hours from qualified businesses</span>
									<div className="aside-icon">
										<img src="http://demos.ths.agency/youwant/wp-content/plugins/postads/assets/img/81293.png" />
									</div>
									<div className="aside-stats">
										<span data-bind="text: state.stats">10,664</span>
										<span>others like you have posted<br />a job this week</span>
									</div>
								</div>
							</Col>
						</Row>
					</Modal>
				</div>
				{adPostRequest && <PostSubmitLoader loading={adPostRequest} />}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state
	};
};

export default connect(mapStateToProps)(Home);
