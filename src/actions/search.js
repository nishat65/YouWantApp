import types from "../types";
import store from "../store";
import {
    getAllAdsApi,
    getSearchMakeParams,
    getSeachParamsResult,
    getAllAdsByFiltersApi,
    addToFavouriteApi,
    getCardDetailsApi,
    searchingAdsApi
} from "../apis/search";


const { dispatch } = store;

export function getAllAds(data, header) {
    return new Promise((response,reject)=>{
        dispatch({
            type:types.SEARCH_FETCHING_ENABLED,
            payload:true
        })
        getAllAdsApi(data).then(res=>{
            dispatch({
                type: types.SEARCH_GET_ADS,
                payload: res
            });
            response(res);
        }).catch(error=>{
            reject(error);
        })
    })
}

export function getMakeParams() {
    return new Promise((resolve, reject) => {
        dispatch({
            type : types.SEARCH_MAKE_PARAMS,
            payload: true
        });
        getSearchMakeParams().then(res => {
            dispatch({
                type: types.SEARCH_MAKE_PARAMS_DONE,
                payload : res
            });
            resolve(res);
        }).catch(err => {
            dispatch({
                type: types.SEARCH_MAKE_PARAMS,
                payload: false
            })
            reject(err);
        })
    })
}

export function getSearchParameters(value) {
    return new Promise((resolve, reject) => {
        dispatch({
            type: types.GET_SEARCH_PARAMS_RESULT,
            payload: true
        });

        getSeachParamsResult(value).then(res => {
            dispatch({
                type: types.GET_SEARCH_PARAMS_RESULT_DONE,
                payload: res
            });
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export function getAllAdsByFilters(data, header) {
    return new Promise((resolve, reject) => {
        dispatch({
            type: types.SEARCH_FETCHING_ENABLED,
            payload: true
        })
        getAllAdsByFiltersApi(data).then(res => {
            dispatch({
                type: types.SEARCH_GET_ADS,
                payload: res
            })
            resolve(res);
        }).catch(error => {
            reject(error);
        })
    })
}

export function addToFavourite(data){
    return new Promise((resolve, reject) => {
        addToFavouriteApi(data).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}

export function getCardDetails() {
    return new Promise((resolve, reject) => {
        getCardDetailsApi().then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}


export function searchingAds(data) {
    return new Promise((resolve, reject) => {
        dispatch({
            type: types.SEARCH_FETCHING_ENABLED,
            payload: true
        })
        searchingAdsApi(data).then(res => {
            dispatch({
                type: types.SEARCH_ADS_COMPLETED,
                payload: res
            })
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
