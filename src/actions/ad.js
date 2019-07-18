import types from "../types";
import store from '../store';
import {postAdApi,deleteAdApi,getAdDetailApi} from '../apis/ad';

const {dispatch} = store;



export function postAd(data){
    return new Promise((response, reject) => {
        postAdApi(data).then(res=>{
            response(res);
        }).catch(error=>{
            reject(error);
        })
    })
   
}

export function deleteAd(data){
    return new Promise((response,reject)=>{
        deleteAdApi(data).then(res=>{
            dispatch({type:types.DELETE_POST,payload:data});
            response(res);
        }).catch(error=>{
            reject(error);
        })
    });
}

export function getAdDetail(data){
    return new Promise((response,reject)=>{
        getAdDetailApi(data).then(res=>{
            response(res);
        }).catch(error=>{
            reject(error);
        })
    })
   
}
