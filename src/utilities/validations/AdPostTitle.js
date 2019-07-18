import Validator from "is_js";

function validate(data) {
	let errors = {};

	if (Validator.empty(data.title)) {
		errors.title = "Title is required!";
	}
    if(Validator.empty(data.mileage) && !Number.isFinite(data.mileage)){
		errors.mileage ="Mileage is required!";
    }
    if(Validator.empty(data.price) && !Number.isFinite(data.price)){
        errors.price="Price is required!";
	}
	
	if (Validator.empty(data.city)) {
		errors.city = "City is required!";
	}

	return {
		isValid: Validator.empty(errors),
		errors
	};
}
export default validate;
