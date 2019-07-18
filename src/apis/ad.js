import {apiGet,apiPost,apiDelete} from '../utils';


export function  postAdApi (data){
    return apiPost(`ads`,data);
}

export function  deleteAdApi (data){
    return apiDelete(`ads?id=${data.id}`);
}
export function  getAdDetailApi (data){
    return apiGet(`ads?id=${data.id}`);
}