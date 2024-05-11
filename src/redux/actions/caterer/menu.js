import { ApiConstants } from "../../../apis/apiconstant";
import { apiClient } from "../../../helper/axioshelper";

export const GET_ADMIN_CATEGORIES = 'GET_ADMIN_CATEGORIES'
export const GET_ADMIN_SUB_CATEGORIES = 'GET_ADMIN_SUB_CATEGORIES'

export const getAdminCategories = () => {
  return async (dispatch) => {
    try {
      const response = await apiClient.get(ApiConstants.GET_ADMIN_CATEGORIE);
      const data = response.data
      console.log(" admin categories log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      dispatch({
        type: 'GET_ADMIN_CATEGORIES',
        payload: {
          catererAdminCategori: data.data
        }
      });
      return response.data;
    } catch (error) {
      console.log("catere admin categories error", error.response)
      if (error?.response?.status == '404') {
        return Promise.reject(`something went wrong!\nPlease try after some time.`)
      }
      return Promise.reject(error.response.data.message);
    }
  };
};


export const getSubAdminCategories = (productID) => {
  return async (dispatch) => {
    try {
      const response = await apiClient.get(`${ApiConstants.GET_ADMIN_SUB_CATEGORIES}/${productID}/sub-categories`);
      const data = response.data
      console.log(" sub admin sub category log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      dispatch({
        type: 'GET_ADMIN_SUB_CATEGORIES',
        payload: {
          catererSubCategori: data.data
        }
      });
      return response.data;
    } catch (error) {
      if (error.response.status == '404') {
        return Promise.reject(`something went wrong!\nPlease try after some time.`)
      }
      return Promise.reject(error.response.data.message);
    }
  };
};


export const postAdminCategorie = (formData) => {
  console.log("post caetgory log", formData)
  return async (dispatch) => {
    try {
      const response = await apiClient.post(ApiConstants.POST_ADMIN_CATEGORIE, formData);
      const data = response?.data
      console.log(" post  data  category log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      dispatch({
        type: 'GET_ADMIN_CATEGORIES',
        payload: {
          catererAdminCategori: data?.message
        }
      });
      return response?.data;
    } catch (error) {
      console.log("catere admin categories error", error)
      // if (error?.response?.status == '404') {
      //   return Promise.reject(`something went wrong!\nPlease try after some time.`)
      // }
      return Promise.reject(error.response.data.message);
    }
  };
};



export const deleteAdminCategorie = (id) => {
  console.log("deleted caterer category id log", id)
  return async (dispatch) => {
    try {
      const response = await apiClient.delete(`${ApiConstants.DELETE_ADMIN_CATEGORIE}/${id}`);
      // const data = response?.data
      console.log(" post  data  category log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      // dispatch({
      //   type: 'GET_ADMIN_CATEGORIES',
      //   payload: {
      //     catererAdminCategori: data?.message
      //   }
      // });
      return response?.data;
    } catch (error) {
      console.log("catere admin categories error", error)
      if (error?.response?.status == '404') {
        return Promise.reject(`something went wrong!\nPlease try after some time.`)
      }
      return Promise.reject(error.response.data.message);
    }
  };
};





export const editAdminCategorie = (id,formData) => {
  console.log("edit caterer category log", id)
  return async (dispatch) => {
    try {
      const response = await apiClient.delete(`${ApiConstants.EDIT_ADMIN_CATEGORIEL}/${id}`,formData);
      // const data = response?.data
      console.log(" edit category log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      // dispatch({
      //   type: 'GET_ADMIN_CATEGORIES',
      //   payload: {
      //     catererAdminCategori: data?.message
      //   }
      // });
      return response?.data;
    } catch (error) {
      console.log("catere admin categories error", error)
      if (error?.response?.status == '404') {
        return Promise.reject(`something went wrong!\nPlease try after some time.`)
      }
      return Promise.reject(error.response.data.message);
    }
  };
};