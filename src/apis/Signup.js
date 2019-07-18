import {apiPost} from '../utils';
export function signupApi (data,header){
    return apiPost("users",data,header)
}