import types from '../types';
import   _ from 'lodash';
const initial_state={
    myAds:[],
    favouriteAds : [],
    fetching:false,
    profile:{}
}


export default function (state=initial_state,action){
    switch(action.type){

        case types.FETCHING_ENABLED:{
            return {...state,fetching:true}
        }

        case types.GET_ADS:{
            let  newAds = action.payload.ads;
            let ads=[...state.myAds,...newAds];
       
            return {...state,myAds:ads,fetching:false}       
        }
        case types.GET_PROFILE:{
            const profile = action.payload.users;
            return {...state,profile,fetching:false}       
        }
        case types.PROFILE_UPDATE:{
            const profile = action.payload.info;
            return {...state,profile,fetching:false}       
        }
        case types.DELETE_POST:{
            const myAds=[...state.myAds];
            const delete_id=action.payload.id;
            _.remove(myAds,{_id:delete_id});
            return{...state,myAds}
        } 
        case types.FETCHING_FAVOURITES_ADS: {
            let { payload } = action.payload;
            return { ...state, fetching: payload };
        }
        case types.FETCHING_FAVOURITES_ADS_DONE: {
            let { info } = action.payload;
            return { ...state, favouriteAds : info, fetching: false }
        }
        case types.CHANGE_CAR_STATUS_MYADS: {
            let { myAds } = state;
            myAds.map((item, index) => {
                if (item._id === action.payload.id) {
                    myAds[index]["status"] = action.payload.status;
                    return;
                }
            })
            return {...state,fetching : true }
        }  
        case types.CHANGE_CAR_STATUS_FAVOURITESADS: {
            let { favouriteAds } = state;
            favouriteAds.map((item, index) => {
                    if (item._id === action.payload.id) {
                    favouriteAds[index]["status"] = action.payload.status;
                    return;
                }
            })
        }    
    }
    return {...state}
}