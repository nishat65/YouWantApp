import types from "../types";
import store from '../store';
import {loginApi} from '../apis/Login';
import {saveUser} from '../utils';

const {dispatch} = store;

export function login (data,header){
    return new Promise((response,reject)=>{
        loginApi(data,header).then(res=>{
            response(res);
            saveUser({token:res.access_token,...res.info});
        }).catch(error=>{
            reject(error);
        })
    })
   
}