import {apiGet, apiPost} from '../utils';

export  function  getCarBrandsApi (){
    return apiGet('getSpecs')
}

export function  getCarDataApi (data){
    return apiGet(`getSpecs?param=${data.id}`);
}

export function checkUserExistApi (data){
    return apiPost("is_user",data)
}

export function withoutPasswordSignupApi (data){
    return apiPost("signup",data)
}