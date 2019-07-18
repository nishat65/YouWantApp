import Validator from "is_js";

function validate(data) {
	let errors = {};

	if (Validator.empty(data.oldPassword)) {
		errors.oldPassword = "Old password is required!";
    }
    if (Validator.empty(data.newPassword)) {
		errors.newPassword = "New password is required!";
	}
	if (!Validator.empty(data.newPassword) && data.newPassword.length < 6) {
		errors.newPassword = "Minimum 6 characters is required in password!";
    }
    if (!Validator.empty(data.oldPassword) && data.oldPassword.length < 6) {
		errors.oldPassword = "Invalid old password!";
	}

	return {
		isValid: Validator.empty(errors),
		errors
	};
}
export default validate;
