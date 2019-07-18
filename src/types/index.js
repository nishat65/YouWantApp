import * as auth from './auth';
import * as carsData from "./carsData";
import * as fetching from "./fetching";
import * as profile from "./profile";
import * as search from "./search";
export default {
    ...auth,
    ...carsData,
    ...fetching,
    ...profile,
    ...search
}