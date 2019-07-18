import types from "../types";

const initial_state={
    brands:[]
}

export default function(state=initial_state,action){

    switch(action.type){
        case types.GET_BRANDS:{
            return{...state,brands:action.payload.info.data}
        }
    }
    return {...state}
}