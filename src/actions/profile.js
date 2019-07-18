import types from "../types";
import {
    getProfileApi,
    getMyCarsApi,
    editProfileApi,
    saveChangesApi,
    getFavouriteAdsAPI,
    getSellCarInformationAPI,
    changeAdStatusAPI
} from '../apis/profile';
import store from '../store';

const {dispatch}=store;

export function getProfile (){
    dispatch({
        type:types.FETCHING_ENABLED,
        payload:true
    })
    return new Promise((response,reject)=>{
        getProfileApi().then(res=>{
            dispatch({
                type:types.GET_PROFILE,
                payload:res
            });
            response(res);
        }).catch(error=>{
            reject(error);
        })
    })
}
export function getMyCars (data){
    dispatch({
        type:types.FETCHING_ENABLED,
        payload:true
    })
    return new Promise((response,reject)=>{
        getMyCarsApi(data).then(res=>{
            dispatch({
                type:types.GET_ADS,
                payload:res
            });
            response(res);
        }).catch(error=>{
            reject(error);
        })
    })
}

export function editProfile (data){
    dispatch({
        type:types.FETCHING_ENABLED,
        payload:true
    });
    return new Promise((response,reject)=>{
        editProfileApi(data).then(res=>{
            dispatch({
                type:types.PROFILE_UPDATE,
                payload:res
            });
            response(res);
        }).catch(error=>{
            reject(error);
        })
    })
}

export function saveChanges(data) {
    return new Promise((resolve, reject) => {
        saveChangesApi().then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export function getFavouriteAds() {
    dispatch({
        type: types.FETCHING_FAVOURITES_ADS,
        payload: true
    });
    return new Promise((resolve, reject) => {
        getFavouriteAdsAPI().then(res => {
            dispatch({
                type: types.FETCHING_FAVOURITES_ADS_DONE,
                payload: res
            });
            resolve(res);
        }).catch(err => {
            reject(err);
         })
    })
}

export function getSellCarInformation(id) {
    return new Promise((resolve, reject) => {
        getSellCarInformationAPI(id).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export function changeAdStatus(data) {
       return new Promise((resolve, reject) => {
         changeAdStatusAPI(data).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}