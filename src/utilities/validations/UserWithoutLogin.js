import Validator from "is_js";

function validate(data) {
	let errors = {};

	if (Validator.empty(data.phone)) {
		errors.phone = "Phone Number is required!";
	}

	if (!Validator.empty(data.phone)&& data.phone && data.phone.length<10) {
		errors.phone = "Enter valid phone number!";
	}

	if (Validator.empty(data.name)) {
		errors.name = "Name is required!";
	}

	return {
		isValid: Validator.empty(errors),
		errors
	};
}
export default validate;
