import Validator from "is_js";

function validate(data) {
	let errors = {};

	if (Validator.empty(data.email)) {
		errors.email = "Email is required!";
	} 

	if (Validator.empty(data.password)) {
		errors.password = "Password  is required!";
	}

	if (!Validator.empty(data.password) && data.password.length < 6) {
		errors.password = "Minimum 6 Characters is required in password!";
	}

	if (Validator.empty(data.phone)) {
		errors.phone = "Phone number is required!";
	}
	
	if (!Validator.empty(data.phone)&& data.phone.length<10) {
	errors.phone = "Enter valid phone number!";
	}

	if (Validator.empty(data.name)) {
		errors.name = "Name is required!";
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
