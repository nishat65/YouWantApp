import React, { Component, Fragment } from "react";
import {
	InputGroup,
	Row,
	Col,
	Container,
	FormControl,
	Form,
	Button,
	Modal,
	Tabs,
	Tab
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Validate from "../../utilities/validations/ProfileUpdate";
import actions from "../../actions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import config from "../../config";
import { getUser } from "../../utils";
import {
	EditProfile,
	ViewProfile,
	MyAds,
	AdPost,
	PostSubmitLoader,
	BreadCrumb,
	InactiveAds,
	FavouritesAds
} from "../../components";

class Profile extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		password: "",
		errors: {},
		modalShow: false,
		tabValue: null,
		adPostRequest: false,
		loader: false,
		last_login_date : "0 Hours Ago"
	};
	componentDidMount() {
		this.setState({ loader: true });
		actions.getProfile().then(res => {
			this.setState({ name: res.users.name, phone: res.users.phone, email: res.users.email, loader: false });
			this.findHours(res);
		}).catch(err => {
			this.setState({ loader: false });
		});
	}

	findHours = (res) => {
		let today_date = new Date();
		let res_login_date = res.users.last_login || new Date;
		let difference_in_hours = Math.floor((Date.parse(today_date) - Date.parse(res_login_date)) / 3600000);
		if (difference_in_hours > 24) {
			difference_in_hours = Math.floor(difference_in_hours / 24) + " Days Ago";
		}
		else {
			difference_in_hours = difference_in_hours + " Hours Ago";
		}
		this.setState({ last_login_date: difference_in_hours });
	}

	modalClose = () => this.setState({ modalShow: false });

	onPostAdClick = () => {
		this.setState({ modalShow: true });
	};
	onInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	isValidData = data => {
		const validation = Validate(data);
		console.log("Data are", data);
		this.setState({ errors: validation.errors });
		return validation.isValid;
	};

	tabClicked = id => () => {
		this.setState({ tabValue: id });

		switch (id) {
			case 1: {
				let { email = "", name = "", phone = "" } = { ...this.props.profile.profile };
				this.setState({ email, name, phone });
				return;
			}
			case 2: {
				if (this.props.profile.InactiveTabs < 1) {
					this.setState({ loader: true });
					actions.getMyCars({ id: 0 }).then(res => {
						this.setState({ loader: false });
					}).catch(err => {
						this.setState({ loader: false });
						toast.error(err && err.response
							&& err.response.data &&
							err.response.data.message || "Something went wrong!");
					});
					return;
				}
			}
			case 3: {
				if (this.props.profile.myAds.length < 1) {
					this.setState({ loader: true });
					actions.getMyCars({ id: 0 }).then(res => {
						this.setState({ loader: false });
					}).catch(err => {
						this.setState({ loader: false });
						toast.error(err && err.response
							&& err.response.data &&
							err.response.data.message || "Something went wrong!");
					});
					return;
				}
			}
			case 4 : {
				actions.getFavouriteAds().then(res => {
				}).catch(error => {
					toast.error(error.response && error.response.data && error.response.data.message || "Something went wrong!", {
						className: "toast-danger",
					})
				})
			}
		}
	};

	renderTabContent = () => {
		let { tabValue, name, email, phone, errors, loader } = this.state;
		switch (tabValue) {
			case 1:
				return (
					<EditProfile
						name={name || ""}
						email={email || ""}
						profileUpdate={this.profileUpdate}
						phone={phone || ""}
						errors={errors || ""}
						onInputChange={this.onInputChange}
						props={this.props}
					/>
				);
			case 2:
				return (
					<InactiveAds
						inactiveAds={this.props.profile.myAds}
						{...this.props}
					/>
				);
			case 3:
				return (
					<MyAds
						deleteAd={this.deleteAd}
						myAds={this.props.profile.myAds}
						adEdit={this.adEdit}
						{...this.props}
						loader={loader}
					/>
				);
			case 4:
				return (
					<FavouritesAds
						deleteAd={this.deleteAd}
						FavouritesAds={this.props.profile.favouriteAds}
						adEdit={this.adEdit}
						{...this.props}
					/>
				)
			default:
				return (
					<ViewProfile
						name={name || ""}
						email={email || ""}
						phone={phone || ""}
					/>
				)
		}
		return;
	};

	profileUpdate = () => {
		let { name, email, phone } = this.state;
		if (this.isValidData({ name, email, phone })) {
			this.setState({ loader: true });
			actions
				.editProfile({ name, email, phone })
				.then(res => {
					toast.success(res.message);
					this.setState({ loader: false });
				})
				.catch(err => {
					this.setState({ loader: false });
					toast.error(err && err.response && err.response.data && err.response.data.message || "Something went wrong!");
				});
		}
	};

	deleteAd = id => {
		actions
			.deleteAd({ id })
			.then(res => {
				toast.success(res && res.message);
				// actions.getMyCars({ id: 0 });
			})
			.catch(error => {
				toast.error(error.response && error.response.data && error.response.data.message, {
					className: "toast-danger"
				});
			});
	};

	adEdit = id => () => {
		this.props.history.push(`/adedit/${id}`);
	};

	adPostRequestHandler = () => {
		this.setState({ adPostRequest: true });
	};

	adPostRequestSubmit = () => {
		this.modalClose();
		this.setState({ adPostRequest: false, tabValue: 3 });
	};
	render() {
		const { fetching } = this.props.profile;
		const { name, modalShow, adPostRequest, last_login_date, tabValue } = { ...this.state };

		console.log(last_login_date,"last_login_date");
		const breadCrumbs = [
			{
				url: '/',
				title: 'Home'
			},
			{
				title: 'Sell Your Car'
			}
		]

		return (
			<Fragment>
				<div className="breadcrumb-sec">
					{this.state.loader ? <PostSubmitLoader /> : null}
					<BreadCrumb
						breadCrumbs={breadCrumbs}
					/>
				</div>
				<Container>
					<Row>
						<Col lg={12}>
							<Row className="search-result-item">

								<a> <img src={`${config.PUBLIC_URL}/assets/images/user_default1.png`} className="user" /></a>


								<Col className="search-result-item-body">
									<Row>
										<Col lg={6} className="left-side">
											<h4>{name || "---"}</h4>
											<p className="description">
												You last logged in at this : {last_login_date}
											</p>
											<p className="info">
												<i class="fas fa-user"></i>
												<span
													className="right-border"
													onClick={this.tabClicked("default")}
												>
													  View Profile  
												</span>
												<i class="far fa-edit"></i>
												<span
													onClick={this.tabClicked(1)}
												>
													Edit Profile
												</span>
											</p>
										</Col>

										<Col lg={6} className="right-side">
											<button
												className="rect-button"
												onClick={this.onPostAdClick}
												style={{ float: "right" }}>
												Post an Ad{" "}
											</button>
										</Col>
									</Row>
									<Row>
										<Col lg={4}>
											<div class="user-stats">
												<h2>0</h2>
												<small>Ad Sold</small>
											</div>
										</Col>
										<Col lg={4}>
											<div class="user-stats">
												<h2>0</h2>
												<small>Total Ads</small>
											</div>
										</Col>
										<Col lg={4}>
											<div class="user-stats">
												<h2>0</h2>
												<small>Inactive Ads</small>
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col className="p-0">
							<ul className="tab-container">
								<li
									onClick={this.tabClicked(1)} className={tabValue == 1 ? "active" : null}>
									Edit Profile
							
								</li>
								<li
									onClick={this.tabClicked(2)} className={tabValue == 2 ? "active" : null}>
									Inactive Ads
								</li>
								<li
									onClick={this.tabClicked(3)} className={tabValue == 3 ? "active" : null}>
									My ads
								</li>
								<li
									onClick={this.tabClicked(4)} className={tabValue == 4 ? "active" : null}>
									Favourite Ads
								</li>
							</ul>
						</Col>
					</Row>
					<Row className="tab-contant-details ">{this.renderTabContent()}</Row>
					<Modal show={modalShow} size="xl" centered onHide={this.modalClose} className="modal-adPost">
						<Row>
							<Col md={12} lg={8}>
								<Modal.Header className="d-lg-none custom-close" closeButton />

								<AdPost
									modalClose={this.modalClose}
									adPostRequestHandler={this.adPostRequestHandler}
									adPostRequestSubmit={this.adPostRequestSubmit}
									carBrands={(this.props.carsData && [...this.props.carsData.brands]) || []}
								/>
							</Col>
							<Col lg={4} className=" d-none d-lg-block">
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
				{adPostRequest && <PostSubmitLoader loading={adPostRequest} />}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps)(Profile);
