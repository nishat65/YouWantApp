import Validator from "is_js";

function validate(data) {
	let errors = {};

	if (Validator.empty(data.email)) {
		errors.email = "Email is required!";
	}

	if (Validator.empty(data.password)) {
		errors.password = "Password is required!";
	}
	if (!Validator.empty(data.password) && data.password.length < 6) {
		errors.password = "Minimum 6 characters is required in password field!";
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
