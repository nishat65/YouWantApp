import types from '../types';
import {signupApi} from  '../apis/Signup';
import store from '../store';
const {dispatch}=store;

export function signup (data,header){
    return new Promise ((response,reject)=>{
        signupApi(data,header).then(res=>{
            response(res);
        })

    })
    
}