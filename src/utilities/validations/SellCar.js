import Validator from "is_js";
import {scrollIntoView} from "../../utils";

function sellCarValidation(data) {
    let errors = {};
    let run = true;

    if (Validator.empty(data.title)) {
        errors.title = "Title is required!";
        if(run)
             scrollIntoView("title");
        run = false; 
    }

    if (Validator.empty(data.price)) {
        errors.price = "Price is required!";
        if (run)
            scrollIntoView("price");
        run = false;
    }

    if (Validator.empty(data.milaege)) {
        errors.milaege = "Mileage is required!";
        if (run)
            scrollIntoView("milaege");
        run = false;

    }

    if (Validator.empty(data.color)) {
        errors.color = "Color is required!";
        if (run)
            scrollIntoView("color");
        run = false;
    }

    if (Validator.empty(data.registration)) {
        errors.registration = "Registration Number is required!";
        if (run)
            scrollIntoView("registration");
        run = false;
    }

    return {
        isValid: Validator.empty(errors),
        errors
    };
}
export default sellCarValidation;
