import React, { Component, Fragment } from "react";
import { ErrorToolTip } from "../../components";
import Select from 'react-select';
import cities from "../../au.json";

class Step1 extends Component {

	getCity = (cities) => {
		let result = cities.map((item, index) => {
			return { value: item.city, label: item.city };
		})
		return result;
	}


	handleInputChange = (city) => {
		// console.log("City are", city);
	}

	render() {
		let cities_value = this.getCity(cities);
		let { adData, onAdInputChange, errors } = this.props;
		return (
			<div className="modalof-form">
				<div>
					<div className="form-field">
						<p>Please add an Add title<span className="red-star">*</span></p>
						<input
							type="text"
							className={`add-input ${errors.title ? "boundary-error" : ""}`}
							value={adData.title}
							onChange={(e) => onAdInputChange(e)}
							name="title"
						/>
						{
							errors.title ? 
								<ErrorToolTip error={errors.title} />
								: null
						}
						{/* <div className="errors">
							{errors.title}
						</div> */}
					</div>
					<div className="form-field">
						<p>Please add mileage<span className="red-star">*</span> </p>
						<input
							type="text"
							className={`add-input ${errors.mileage ? "boundary-error" : ""}`}
							value={adData.mileage}
							onChange={(e) => onAdInputChange(e)}
							name="mileage"
						/>
						{
							errors.mileage ?
								<ErrorToolTip error={errors.mileage} />
								: null
						}
						{/* <div className="errors">
							{errors.mileage}
						</div> */}
					</div>
					<div className="form-field">
						<p>Please add Price<span className="red-star">*</span> ($ only)</p>
						<input
							className={`add-input ${errors.price ? "boundary-error" : ""}`}
							value={adData.price}
							onChange={(e)=>onAdInputChange(e)}
							name="price"
						/>
						{
							errors.price ?
								<ErrorToolTip error={errors.price} />
								: null
						}
						{/* <div className="errors">
							{errors.price}
						</div> */}
					</div>
					<div className="form-field">
						<p>Please add City<span className="red-star">*</span></p>
						<input
							className={`add-input ${errors.city ? "boundary-error" : ""}`}
							value={adData.city}
							onChange={(e) => onAdInputChange(e)}
							name="city"
						/>
						{/* <Select
							options={cities_value}
							onInputChange={e => this.handleInputChange(e)}
						/> */}
						{
							errors.city ?
								<ErrorToolTip error={errors.city} />
								: null
						}
						{/* <div className="errors">
							{errors.price}
						</div> */}
					</div>
					<div className="form-field">
						<p>Please add color </p>
						<input
							type="text"
							className={`add-input ${errors.color ? "boundary-error" : ""}`}
							value={adData.color}
							onChange={(e) => onAdInputChange(e)}
							name="color"
						/>
						{
							errors.color ?
								<ErrorToolTip error={errors.color} />
								: null
						}
						{/* <div className="errors">
							{errors.color}
						</div> */}
					</div>
				</div>

				{/* <div>
					<h5>Please Select Model</h5>
                    <label className="labeltext">Do u Like Me ?</label>
                    <div className="form-check-inline">
                        <label className="customradio">
                            <span className="radiotextsty">Yes</span>
                            <input type="radio" checked="checked" name="radio" />
                            <span className="checkmark"></span>
                        </label>        
                        <label className="customradio">
                            <span className="radiotextsty">No</span>
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
				</div> */}
			</div>
		);
	}
}

export default Step1;
