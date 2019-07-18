import types from '../types';
import { stat } from 'fs';

const initial_state={
    ads:[],
    fetching: false,
    Search_make_Params: {}
}

export default function search(state=initial_state,action){
    switch (action.type) {
        case types.CLEAR_ADS: {
            let ads = [];
            state = { ...state, ads }
        }
        case types.SEARCH_FETCHING_ENABLED:{
            return({...state,  fetching:true})
        }
        case types.SEARCH_GET_ADS:{
            let newAds= action.payload.ads;
            let ads=[...state.ads,...newAds];
            return({...state,ads , fetching : false});
        }
        case types.SEARCH_MAKE_PARAMS_DONE: {
            let { Search_make_Params } = state;
            Search_make_Params = action.payload.info;
            return ({ ...state, Search_make_Params  ,fetching : false });
        }
        case types.SEARCH_MAKE_PARAMS: {
            return ({ ...state, fetching: false });
        }
        case types.SEARCH_ADS_COMPLETED: {
            let ads = [];
            state = { ...state, ads };
            let newAds = action.payload.ads ;
            return { ...state, ads: newAds, fetching: false };
        }
    }
    return({...state});
}

