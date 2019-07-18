import React, { Component, Fragment } from "react";
import { Row, Col, Container, Card, CardDeck, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
import { Async } from "react-select";
import { connect } from "react-redux";
import store from "../../store";
import types from "../../types";
import actions from "../../actions";
import { CarDetailsCard, PostSubmitLoader, Loader, BreadCrumb,ImageLoader } from "../../components";
import { toast } from "react-toastify";

const { dispatch } = store;

let Selectinformation = [];

class Search extends Component {

	constructor(props) {
		super(props);
		this.trackScrolling = this.trackScrolling.bind(this);
	}

	state = {
		priceRange: { min: 10000, max: 500000 },
		search: {
			searchByMake: [],
			searchByModel: [],
			searchBySeries: [],
			searchByEngines: [],
			searchByTransmission: []
		},
		value: {
			valueByMake: {},
			valueByModel: {},
			valueBySeries: {},
			valueByEngines: {},
			valueByTransmission: {}
		},
		loadmore: true,
		isNearBottom: false,
		filters: {
			searchByKeyword: "",
			milage_from: "",
			milage_to: "",
			price: {}
		},
		load_message: 0,
		api_loader: false
	};

	componentDidMount() {
		
		dispatch({
			type: types.CLEAR_ADS,
			payload: true
		});

		actions.getAllAds({ id: 0 }).then(res => {
			let load_message;
			if(res.ads.length === 0){
				load_message = 1;
			}
			else {
				load_message = 0;
			}
			this.setState({ allAds: res.ads, loadmore: false, load_message });
			window.addEventListener("scroll", this.trackScrolling);
		}).catch(err => {
			toast.error(err.response && err.response.data && err.response.data.message);
			this.setState({ loadmore: false, load_message : 1 });
		});
		actions.getMakeParams().then(res => {
			const { info = {} } = res;
			const { data } = info;
			this.setState({ search: { ...this.state.search, searchByMake: data } }, () => {
				this.getCarInformation("searchByMake");
			});
		}).catch(err => {
			toast.error(err.response && err.response.data && err.response.data.message);
		})
	}

	getCarInformation = (title) => {
		let { search } = this.state;
		Selectinformation = search[`${title}`] && search[`${title}`].map((item, index) => item) || [];
	}

	getFiltersData = (value) => {
		actions.getSearchParameters(value).then(res => {
			const { info } = res;
			let { search, value } = this.state;
			let carInfoTitle = "";
			if (!info.Heading) {
				return;
			}
			switch (info.Heading) {
				case "model": {
					search = { ...search, searchByModel: info.data }
					value = {
						...value,
						valueByModel: {},
						valueBySeries: {},
						valueByEngines: {},
						valueByTransmission: {}
					}
					carInfoTitle = "searchByModel";
				}
				case "year": {
					search = { ...search, searchBySeries: info.data }
					value = {
						...value,
						valueBySeries: {},
						valueByEngines: {},
						valueByTransmission: {}
					}
					carInfoTitle = "searchBySeries";
				}
				case "series": {
					search = { ...search, searchByEngines: info.data }
					value = {
						...value,
						valueByEngines: {},
						valueByTransmission: {}
					}
					carInfoTitle = "searchByEngines";
				}
				case "engine": {
					search = { ...search, searchByTransmission: info.data }
					value = {
						...value,
						valueByTransmission: {}
					}
					carInfoTitle = "searchByTransmission";
				}
				case "transmission": {
					carInfoTitle = "searchByTransmission";
				}
				default: {
					break;
				}
			}
			this.setState({ search, value, loadmore: false }, () => {
				this.getCarInformation(carInfoTitle);
			});
		});;
	}

	handleInput = (e, title) => {
		let { value, search , filters} = this.state;
		value = { ...value, [`${title}`]: e };
		this.setState({ value, loadmore: true }, () => {
			let data = value[`${title}`];
			this.getFiltersData(data);
			let filtered_value = Object.keys(value).map((item, index) => {
				return value[item];
			})
			filters = { ...filters, search_params : filtered_value }
			actions.searchingAds(filters);
		});
	};

	loadMoreAds = () => {
		let nextFetchId = this.props.search.ads.length;
		let { filters, value } = this.state;
		value = { ...value};
		this.setState({ api_loader: true });
		let filtered_value = Object.keys(value).map((item, index) => {
			return value[item];
		})
		filters = { ...filters, search_params: filtered_value }
		actions.getAllAds({ id: nextFetchId, filters : filters }).then(res => {
			let load_msg;
			if (!res.ads.length)
				load_msg = 1;
			else
				load_msg = 0;
			this.setState({ isNearBottom: false, load_message: load_msg, api_loader: false });
		}).catch(err => {
			this.setState({ loadmore: true, isNearBottom: false, load_msg: 1, api_loader: false });
		});
	};

	trackScrolling() {
		const wrappedElement = document.getElementById("image_row");
		var sticky = wrappedElement && wrappedElement.offsetTop;
	
		if ((window.pageYOffset + 450) > sticky &&  !this.state.isNearBottom) {
			this.setState({ isNearBottom: true }, () => {
				if (!this.state.load_message) {
					this.loadMoreAds();
				}
			})
		}
	}

	loadCarModal = (input, callback) => {
		let newArray = [];
		Selectinformation.filter(brand => {
			if (brand["value"].includes(input.toUpperCase())) {
				newArray.push(brand);
				return brand;
			}
		});
		setTimeout(() => {
			callback([...newArray]);
		}, 1000);
	};

	loadSearchParams = (e, title) => {
		this.getCarInformation(title);
	}

	handleInputField = (e) => {
		const { name, value } = e.target;
		let { filters } = this.state;
		let newFilter = { ...filters }
		newFilter[name] = value;
		this.setState({ filters: newFilter }, () => {
			if (name === "searchByKeyword") {
				filters = { ...this.state.filters, search_params: [] };
				actions.searchingAds(filters).then(res => {
					if (!res.ads.length) {
						this.setState({ load_message: true });
					}
				}).catch(error => {
					toast.error(error.response && error.response.data && error.response.data.message || "Internal Sever Error", {
						className: "toast-danger"
					});
				});
			}
		});
	}

	picPriceRange = (value) => {
		this.setState({ filters: { ...this.state.filters, price: value } });
	}

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.trackScrolling);
	}

	render() {
		let { filters, load_message } = this.state;
		let { searchByMake,
			searchByEngines,
			searchByModel,
			searchBySeries,
			searchByTransmission
		} = this.state.search;

		let {
			valueByMake,
			valueByEngines,
			valueByModel,
			valueBySeries,
			valueByTransmission
		} = this.state.value;

		let { ads = [] } = this.props.search;

		const breadCrumbs = [
			{
				url: '/',
				title: 'Home'
			},
			{
				url  : '',
				title: 'Search'
			}
		]
		return (
			<React.Fragment>
				<div className="breadcrumb-sec">
					{this.state.loadmore || this.props.fetching ? <PostSubmitLoader /> : null}
					<BreadCrumb
						breadCrumbs={breadCrumbs}
					/>
				</div>
				<Container fluid>
					<Row>
						<Col lg={3}>
							<div className="custom-filter">
								<div className="filter-header">Search</div>
								<div className="search-body">
									<div className="filter-container">
										<label className="filter-label"> Search by Keyword</label>
										<div>
											<FaSearch className="filter-icon" />
											<input
												type="text"
												className="input-filter"
												value={filters.searchByKeyword}
												name="searchByKeyword"
												onChange={e => this.handleInputField(e)} />
										</div>
									</div>
									<div>
										<div className="milage">
											<div className="filter-container">
												<label className="filter-label"> Search by Milage</label>
												<div>
													<input
														style={{ width: "100%" }}
														placeholder="From"
														type="text"
														name="milage_from"
														value={filters.milage_from}
														className="input-filter"
														onChange={e => this.handleInputField(e)}
													/>
												</div>
											</div>
										</div>
										<div className="milage-divider">-</div>
										<div className="milage">
											<div className="filter-container">
												<div>
													<input
														style={{ width: "100%" }}
														placeholder="To"
														type="text"
														name="milage_to"
														className="input-filter"
														onChange={e => this.handleInputField(e)}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="filter-container input_range-outer">
										<label className="filter-label">
											{" "}
											Search by Price
										</label>
										<div className="search_price-input_range">
											<InputRange
												maxValue={999999}
												minValue={0}
												value={this.state.priceRange}
												onChange={value => this.setState({ priceRange: value })}
												onChangeComplete={value => {
													this.picPriceRange(value);
												}}
											/>
										</div>
									</div>
									<div className="filter-container search_by_make async-input">
										<label className="filter-label"> Search by Make</label>
										<Async
											isClearable={false}
											onMenuOpen={(e) => this.loadSearchParams(e, "searchByMake")}
											isSearchable={true}
											defaultOptions={searchByMake}
											value={valueByMake}
											loadOptions={this.loadCarModal}
											onChange={e => { this.handleInput(e, "valueByMake") }}
											isDisabled={false}
										/>
									</div>
									<div className="filter-container async-input">
										<label className="filter-label"> Search by model</label>
										<Async
											isClearable={false}
											onMenuOpen={(e) => this.loadSearchParams(e, "searchByModel")}
											isSearchable={true}
											defaultOptions={searchByModel}
											value={valueByModel}
											loadOptions={this.loadCarModal}
											onChange={e => { this.handleInput(e, "valueByModel") }}
											isDisabled={!(valueByMake && valueByMake.value)}
										/>
									</div>
									<div className="filter-container async-input">
										<label className="filter-label"> Search by series</label>
										<Async
											isClearable={false}
											onMenuOpen={(e) => this.loadSearchParams(e, "searchBySeries")}
											isSearchable={true}
											defaultOptions={searchBySeries}
											value={valueBySeries}
											loadOptions={this.loadCarModal}
											onChange={e => { this.handleInput(e, "valueBySeries") }}
											isDisabled={!(valueByModel && valueByModel.value)}
										/>
									</div>
									<div className="filter-container async-input">
										<label className="filter-label"> Search by engine</label>
										<Async
											isClearable={false}
											onMenuOpen={(e) => this.loadSearchParams(e, "searchByEngines")}
											isSearchable={true}
											defaultOptions={searchByEngines}
											value={valueByEngines}
											loadOptions={this.loadCarModal}
											onChange={e => { this.handleInput(e, "valueByEngines") }}
											isDisabled={!(valueBySeries && valueBySeries.value)}
										/>
									</div>
									<div className="filter-container async-input">
										<label className="filter-label"> Search by transmission</label>
										<Async
											isClearable={false}
											onMenuOpen={(e) => this.loadSearchParams(e, "searchByTransmission")}
											isSearchable={true}
											defaultOptions={searchByTransmission}
											value={valueByTransmission}
											loadOptions={this.loadCarModal}
											onChange={e => { this.handleInput(e, "valueByTransmission") }}
											isDisabled={!(valueByEngines && valueByEngines.value)}
										/>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={9} className=" found_head">
							<div>
								<div >
									<ul className="Found_ads_ul">
										<li className="Found_ads">Found Ads({ads.length})</li>
									</ul>
								</div>

								<Row>
									{ads.map((data, index) => (
										<Col key={index} lg={4}>
											<CarDetailsCard
												data={data}
												{...this.props}
											/>
										</Col>
									))}
								</Row>
								<Row>
									{this.state.api_loader ?
										<PostSubmitLoader /> :
										load_message ? <span className="No_Record">No More Record Found</span> :
											// <span className="Search_Page_Load">
											// 	<Button
											// 		id='image_row'
											// 		variant="outline-primary"
											// 		onClick={this.loadMoreAds}
											// 		className="Load_More"
											// 		disabled={this.state.loadmore}
											// 	>Load More...</Button>
											// </span>
											null
									}
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		search: state.search,
		searchByMakeOptions: state.search.Search_make_Params,
		fetching: state.search.fetching || false
	};
};
export default connect(mapStateToProps)(Search);
