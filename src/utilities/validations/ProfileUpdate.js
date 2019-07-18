import Validator from "is_js";

function validate(data) {
	let errors = {};

	if (Validator.empty(data.email)) {
		errors.email = "Email is required!";
	}
	if (!Validator.empty(data.phone) && data.phone.length < 10) {
		errors.phone = "Enter valid phone number!";
	}
	if (Validator.empty(data.name)) {
		errors.name = "Please Enter Name!";
	}

	if (!Validator.empty(data.email) && !Validator.email(data.email)) {
		errors.email = "Invalid email!";
	}

	return {
		isValid: Validator.empty(errors),
		errors
	};
}
export default validate;
