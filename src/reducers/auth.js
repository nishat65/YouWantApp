import types from '../types';

const initial_state ={
    user:{text:"welecom to login screeen"}
}

export default function auth (state=initial_state,actions){
    switch(actions.type){
        case types.USER_LOGIN_REQUEST:
        return{...state}
    }

    return state;
}