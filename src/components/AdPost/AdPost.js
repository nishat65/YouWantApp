import React, { Component, Fragment } from "react";
import { Modal, Button, Tooltip } from "react-bootstrap";
import adTitleValidator from "../../utilities/validations/AdPostTitle";
import emailValidator from "../../utilities/validations/ForgetPassword";
import userWithoutPasswordValidator from "../../utilities/validations/UserWithoutLogin";
import { Step1, Step2, Step3, Step4, Step4Password, ModalPostLoader } from "../../components";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import actions from "../../actions";
import { connect } from "react-redux";
import { isLoggedIn } from "../../utils";
import { S_IFBLK } from "constants";

class AdPost extends Component {
	state = {
		is_next: true,
		apiDataArray: [],
		apiDataIndex: -1,
		staticStep: 0,
		imagePreview: [],
		user: {
			email: "",
			name: "",
			phone: "",
			password: "",
			userExist: true
		},
		errors: {},
		brandName: "",
		adData: {
			title: "",
			mileage: "",
			color: "",
			price: "",
			city:""
		},
		fetching: false,
		selectEngineOption: null,
		toolTipShow: false,
	};
	componentDidMount() {
		let { brandName, brandId } = this.props;

		if (brandId) {

			this.setState({ fetching: true });
			actions.getCarData({ id: brandId }).then(res => {
				let apiDataArray = [...this.state.apiDataArray];
				apiDataArray.push(res.info);
				let { is_next } = res.info;
				this.setState({ is_next, apiDataArray, apiDataIndex: 0, brandName, fetching: false });
			}).catch(err => {
				this.setState({ fetching: false });
				toast.error(err && err.response.data.message);
			});
		} else {
			this.getCarBrands();
		}
	}


	getCarBrands = () => {
		let carBrands = this.props.carBrands;
		if (carBrands.length > 0) {
			let apiDataArray = [{ data: carBrands, Heading: "brand", is_next: true }];
			this.setState({ apiDataArray, apiDataIndex: 0});
			return;
		}
		this.setState({ fetching: true });
		actions
			.getCarBrands()
			.then(res => {
				let apiDataArray = [{ data: res.info.data, Heading: "brand", is_next: true }];
				this.setState({ apiDataArray, apiDataIndex: 0, fetching: false });
			})
			.catch(error => { });
	};


	isValidPostTitle = () => {
		let adData = { ...this.state.adData };
		let validator = adTitleValidator(adData);
		this.setState({ errors: validator.errors });
		return validator.isValid;
	};


	isValidImageData = () => {
		let imagePreview = [...this.state.imagePreview];
		if (imagePreview.length > 0) {
			return true;
		}
		return false;
	};


	isValidEmail = () => {
		let user = { ...this.state.user };
		let validator = emailValidator(user);
		this.setState({ errors: validator.errors });
		return validator.isValid;
	};


	isValidUserPassword = () => {
		let user = { ...this.state.user };
		let { errors } = this.state;
		if (user.password.trim().length < 6) {
			errors["password"] = "Password length should be greater than 6!";
			this.setState({ errors });
			return false;
		}
		return true;
	};


	isValidNewUserData = () => {
		let user = { ...this.state.user };
		let validator = userWithoutPasswordValidator({ ...user });
		this.setState(validator);
		return validator.isValid;
	};


	renderModalStep = () => {
		let step = this.state.staticStep;
		let { email, name, phone, userExist, password } = { ...this.state.user };
		let errors = { ...this.state.errors };
		let { toolTipMessage } = this.state;

		switch (step) {
			case 1:
				return (
					<Step1
						errors={errors}
						onAdInputChange={this.onAdInputChange}
						adData={this.state.adData}
					/>
				);
			case 2:
				return <Step2
					onDrop={this.onDrop}
					imagePreview={this.state.imagePreview}
					cancelImageDropzone={this.cancelImageDropzone}
					toolTipMessage={toolTipMessage}
					toolTipShow={this.state.toolTipShow}

				/>;
			case 3:
				return (
					<Step3
						onInputChange={this.onInputChange}
						onEmailSubmit={this.onEmailSubmit}
						email={email}
						toolTipShow={this.state.toolTipShow}
						errors={errors}
					/>
				);
			case 4: {
				if (userExist) {
					return <Step4Password
						onInputChange={this.onInputChange}
						password={password}
						toolTipShow={this.state.toolTipShow}
						errors={errors}
					/>;
				} else {
					return (
						<Step4
							onInputChange={this.onInputChange}
							onEmailSubmit={this.userLogin}
							name={name}
							phone={phone}
							email={email}
							errors={errors}
							toolTipShow={this.state.toolTipShow}
						/>
					);
				}
			}
			default:
				return "";
		}
	};

	stepBack = () => {
		let { staticStep, apiDataIndex } = this.state;
		let { errors } = this.state;

		if (apiDataIndex != 0) {
			if (staticStep >= 1) {
				staticStep = staticStep - 1;
				errors = {}
			}

			this.setState({ apiDataIndex: apiDataIndex - 1,errors, staticStep, selectEngineOption: null, toolTipShow: false }, () => {
			});
		}
	};

	getAdApiData = () => {
		let apiDataArray = [...this.state.apiDataArray];
		let imagePreview = [...this.state.imagePreview];
		let adData = { ...this.state.adData };
		let brandName = this.state.brandName;
		let formData = new FormData();
		apiDataArray.forEach(entity => {
			if (entity.Heading) {
				formData.append(entity.Heading, entity.selected);
			}
		});
		brandName && formData.append("brand", brandName);
		formData.append("title", adData["title"]);
		formData.append("mileage", adData["mileage"]);
		formData.append("color", adData["color"]);
		formData.append("price", adData["price"]);
		formData.append("city", adData["city"]);
		imagePreview.map(file => {
			formData.append("image", file);
		});
		return formData;
	};

	postAdApiHit = () => {
		this.props.adPostRequestHandler();
		actions
			.postAd(this.getAdApiData())
			.then(res => {
				toast.success(res && res.message);
				this.props.adPostRequestSubmit();
			})
			.catch(error => {
				toast.error(
					(error.response && error.response.data && error.response.data.message) ||
					"Something went wrong"
				);
			});
	};
	stepNext = () => {
		let { is_next, staticStep, apiDataIndex } = this.state;
		let apiDataArray = [...this.state.apiDataArray];
		this.setState({ selectEngineOption: null, toolTipShow: false });

		if (isLoggedIn() && staticStep == 2) {
			if (this.isValidImageData()) {
				this.postAdApiHit();
				return;
			} else {
				toast.error("Please upload an image");
			}
			return;
		}
		let curApiDataIndex = apiDataIndex;
		let nextApiDataIndex = apiDataIndex + 1;
		if (is_next || apiDataArray[nextApiDataIndex]) {
			toast.dismiss();

			if (apiDataArray[curApiDataIndex].selected) {
				let id = apiDataArray[curApiDataIndex].selected_id;
				if (!apiDataArray[nextApiDataIndex]) {
					this.setState({ fetching: true });
					actions.getCarData({ id }).then(res => {
						apiDataArray.push(res.info);
						let { is_next, Heading } = res.info;
						this.setState({
							is_next,
							currentHeading: Heading,
							apiDataArray,
							apiDataIndex: nextApiDataIndex,
							fetching: false
						});
					}).catch(err => {
						toast.error(err && err.response.data.message);
					});
				} else {
					is_next = apiDataArray[nextApiDataIndex].is_next;
					this.setState({ apiDataIndex: nextApiDataIndex, is_next });
				}
			} else {
				// toast.error("Please select a value first");
				this.setState({ toolTipShow: true });
				return;
			}
		} else {
			switch (staticStep) {
				case 0: {
					if (apiDataArray[curApiDataIndex].selected) {
						this.setState(prevprops => ({
							staticStep: prevprops.staticStep + 1,
							apiDataIndex: nextApiDataIndex
						}));
						return;
					} else {
						// toast.error("Please select a value first");
						this.setState({ toolTipShow: true });
						return;
					}
				}
				case 1: {
					if (this.isValidPostTitle()) {
						this.setState(prevprops => ({
							staticStep: prevprops.staticStep + 1,
							apiDataIndex: nextApiDataIndex
						}));
					}
					return;
				}
				case 2: {
					if (this.isValidImageData()) {
						this.setState(prevprops => ({
							staticStep: prevprops.staticStep + 1,
							apiDataIndex: nextApiDataIndex
						}));
						return;
					}
					this.setState({ toolTipMessage: "Please Select Image!", toolTipShow: true })
					// toast.error("Please upload an image");
					return;
				}
				case 3: {
					if (this.isValidEmail()) {
						this.onEmailSubmit();
						return;
					}
					this.setState({ toolTipMessage: "Enter Valid Email!", toolTipShow: true })
					// toast.error("Enter valid email");
					return;
				}
				case 4: {
					const userExist = this.state.user.userExist;
					if (userExist) {
						if (this.isValidUserPassword()) {
							this.userLogin();
							return;
						}
						this.setState({ toolTipShow: true });
						// toast.error("Please enter valid password");
					} else {
						if (this.isValidNewUserData()) {
							this.userLogin();
							return;
						}
						return;
					}
				}
			}
		}
	};

	onEmailSubmit = () => {
		let user = { ...this.state.user };
		actions.checkUserExist({ email: user.email }).then(res => {
			user.userExist = res.is_user;

			this.setState(prevprops => ({
				user,
				staticStep: prevprops.staticStep + 1,
				apiDataIndex: prevprops.apiDataIndex + 1
			}));
		}).catch(err => {
			toast.errors(err && err.response.data.message);
		});
	};

	onInputChange = e => {
		let user = { ...this.state.user };
		let { errors } = this.state;
		const { name, value } = e.target;
		user[e.target.name] = e.target.value;

		errors[name] = "";

		this.setState({ user, toolTipShow: false, errors });
	};

	userLogin = e => {

		let user = { ...this.state.user };
		let { email, phone, name, password } = user;
		if (user.userExist) {
			actions.login({ email, password }).then(res => {
				this.postAdApiHit();
			}).catch(err => {
				toast.error(err && err.response.data.message);
			});
		} else {
			actions.withoutPasswordSignup({ email, phone, name }).then(res => {
				this.postAdApiHit();
			}).catch(err => {
				toast.error(err && err.response.data.message);
			});
		}
	
	};

	onRadioChange = (e, entity, index) => {
		let { apiDataIndex } = this.state;
		let apiDataArray = [...this.state.apiDataArray];
		apiDataArray.length = apiDataIndex + 1;
		apiDataArray[apiDataIndex].selected = e.target.value;
		apiDataArray[apiDataIndex].selected_id = entity.id;
		let is_next = apiDataArray[apiDataIndex].is_next;
		this.setState({ apiDataArray, is_next, selectEngineOption: index, toolTipShow: false }, () => {
		});
	};

	onAdInputChange = e => {
		const reg = /^\d*$/;
		const { name, value } = e.target;
		if (!reg.test(value) && name == "mileage")
			return;
		if (!reg.test(value) && name == "price")
			return;
		if (name === "mileage" && value > 200)
			return;
		if (name == "price" && value > 100000)
			return;

		let adData = { ...this.state.adData };
		let { errors } = this.state;
		errors[name] = "";
		adData[e.target.name] = e.target.value;
		this.setState({ adData, errors });
	};
	onDrop = (files, rejected) => {
		let imagesUploaded = files.map(file => {
			return Object.assign(file, { preview: URL.createObjectURL(file) });
		});
		this.setState(prevstate => ({
			isDropped: true,
			imagePreview: [...imagesUploaded],
			toolTipShow: false
		}));
	};

	cancelImageDropzone = () => {
		this.setState({ imagePreview: [] });
	}

	render() {
		let { apiDataArray, apiDataIndex, fetching, staticStep, toolTipShow } = this.state;
		const dataToDisplay = apiDataArray[apiDataIndex];

		return (
			<Fragment>
				{!fetching ? (
					<Modal.Body className="custom-body">
						{dataToDisplay && dataToDisplay.Heading ? (
							<Fragment>
								<div className="tooltip-rel">
									<h5 id="TooltipHeading">
										{`Please Select ${dataToDisplay.Heading}`}
										{toolTipShow ? (
											<Tooltip
												placement="bottom"
												target="TooltipHeading"
												className="tooltip_error"
											// id="tooltip-right"
											>
												<span> Please Select Option</span>
											</Tooltip>
										) : null}
									</h5>
								</div>

								{dataToDisplay.Heading &&
									dataToDisplay.data.map((entity, index) => {
										return (
											<label className="adp_radio" for={`ad_model-${index}`} key={index}>
												<input
													type="radio"
													key={index}
													name={dataToDisplay.Heading}
													onChange={e => this.onRadioChange(e, entity, index)}
													value={entity.value}
													className="radio-inline"
													id={`ad_model-${index}`}
													checked={apiDataArray[apiDataIndex].selected === entity.value ? true : false}
												/>
												<span className="outside">
													<span className="inside"></span>
												</span>
												{entity.value}
											</label>
										)
									})}
							</Fragment>
						) : (
								this.renderModalStep()
							)}
					</Modal.Body>
				) : (
						<Modal.Body className="custom-body">
							<ModalPostLoader no={15} />
						</Modal.Body>
					)}

				<Modal.Footer>
					{apiDataIndex > 0 && (
						<button className="model-previous" onClick={this.stepBack}>
							Back
						</button>
					)}
					<button className="modal-next" onClick={this.stepNext}>
						Next
					</button>
				</Modal.Footer>
			</Fragment>
		);
	}
}

export default withRouter(AdPost);
