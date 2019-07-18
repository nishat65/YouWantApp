import {apiGet,apiPut, apiPost} from "../utils";

export function getProfileApi (){
    return apiGet("users") ;
}

export function getMyCarsApi (data){
    return apiGet("ads/me?start="+data.id);
}

export function editProfileApi (data){
    return apiPut("users",data)
}

export function saveChangesApi(data){
    return apiPost('ads',data);
}

export function getFavouriteAdsAPI() {
    return apiGet("favourite");
}

export function getSellCarInformationAPI(id) {
    return apiGet('ads/me?id=' + id);
}

export function changeAdStatusAPI(data){
    return apiPut(`ads/me`, data);
}