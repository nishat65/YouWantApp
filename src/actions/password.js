import types from '../types';
import store from '../store';
import {forgetPasswordApi,changePasswordApi} from '../apis/password';
const {dispatch}=store;

export function forgetPassword(data){
    return new Promise((response,reject)=>{
        forgetPasswordApi(data).then(res=>{
            response(res);
        }).catch(error=>{
            reject(error);
        })
    })
    
}

export function changePassword(data){
    return new Promise((response,reject)=>{
        changePasswordApi(data).then(res=>{
            response(res);
        }).catch(error=>{
            reject(error);
        })
    })
    
}
