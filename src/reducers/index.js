import {combineReducers} from 'redux';
import auth from './auth';
import carsData from './carsData';
import profile from './profile';
import search from './search';
export default  combineReducers({
    auth,
    carsData,
    profile,
    search
})
 