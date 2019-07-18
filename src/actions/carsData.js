import types from "../types";
import store from '../store';
import {getCarBrandsApi,getCarDataApi,checkUserExistApi,withoutPasswordSignupApi} from '../apis/carsData';
import {saveUser} from '../utils';
const {dispatch} = store;

export function getCarBrands(){
    return new Promise((response,reject)=>{    
        getCarBrandsApi().then(res=>{
            dispatch({
                type:types.GET_BRANDS,
                payload:res
            });
            response(res)
        }).catch(error=>{
            reject(error);
        })
    })
   
}

export function getCarData(data){
    return new Promise((resolve,reject)=>{
        getCarDataApi(data).then(res=>{
            resolve(res)
        }).catch(error=>{
            reject(error);
        })
    })
   
}
export function checkUserExist(data){
    return new Promise((response,reject)=>{
       checkUserExistApi(data).then(res=>{
            response(res)
        }).catch(error=>{
            reject(error);
        })
    })
   
}

export function withoutPasswordSignup(data){
    return new Promise((response,reject)=>{
       withoutPasswordSignupApi(data).then(res=>{
        saveUser({token:res.access_token,...res.info});
            response(res)
        }).catch(error=>{
            reject(error);
        })
    })
   
}