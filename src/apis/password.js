
import {apiPost} from '../utils';

export  function  forgetPasswordApi ( data ){
    return apiPost('forgotPassword',data)
}

export  function  changePasswordApi ( data ){
    return apiPost('changePassword',data)
}