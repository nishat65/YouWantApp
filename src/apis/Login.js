import {apiPost } from '../utils';
export function loginApi(data,header){
    return apiPost("login",data,header);
}