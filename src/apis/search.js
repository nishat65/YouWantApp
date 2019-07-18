import {apiGet, apiPost} from '../utils';
import { transcode } from 'buffer';

export function getAllAdsApi(data) {
   let { id, filters } = data; 

   let new_filter;
   console.log("ID are", data,id);

   if (id == 0) {
      new_filter = {
         start: id
      }
   } else {
      data = filters;
       new_filter = {
         start: id,
         filter: data.search_params && data.search_params.length ? 1 : 0,
         search: data.searchByKeyword || "",
         make: data.search_params.length && data.search_params[0] && data.search_params[0].value || "",
         model: data.search_params.length && data.search_params[1] && data.search_params[1].value || "",
         series: data.search_params.length && data.search_params[2] && data.search_params[2].value || "",
         engine: data.search_params.length && data.search_params[3] && data.search_params[3].value || "",
         transmission: data.search_params.length && data.search_params[4] && data.search_params[4].value || "",
      }
   }
   return apiGet(`ads`, {start : id});
}

// export function getAllAdsApi(data) {
//    return apiGet(`ads`);
// }

export function getSearchMakeParams() {
   return apiGet('getSpecs');
}

export function getSeachParamsResult(value) {
   return apiGet(`getSpecs?param=${value.id}`);
}

export function getAllAdsByFiltersApi(filters) {
   return apiGet('getSpecs?params');
}

export function addToFavouriteApi(data) {
   return apiPost("favourite", { post_id: data._id || null });
}

export function getCardDetailsApi(id) {
   //Pass Id to get All Information
   return apiGet();
}

export function searchingAdsApi(data) {

  let new_filter = {
      filter: data.search_params.length ? 1 : 0,
      search: data.searchByKeyword,
      make: data.search_params.length && data.search_params[0] && data.search_params[0].value || "",
      model: data.search_params.length && data.search_params[1] && data.search_params[1].value || "",
      series: data.search_params.length && data.search_params[2] && data.search_params[2].value || "",
      engine: data.search_params.length && data.search_params[3] && data.search_params[3].value || "",
      transmission: data.search_params.length && data.search_params[4] && data.search_params[4].value || "",
   }

   return apiGet(`ads`, new_filter);
}


