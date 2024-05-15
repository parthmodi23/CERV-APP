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





export const editAdminCategorie = (id, formData) => {
  return async (dispatch) => {
    try {
      // Make the API call to update the category
      const response = await apiClient.put(ApiConstants.EDIT_ADMIN_CATEGORIE + `${id}`, formData);

      // Log the response data for debugging
      console.log("Edit category response:", response);

      // Dispatch an action to update Redux state if needed
      // dispatch({
      //   type: 'EDIT_ADMIN_CATEGORIE',
      //   payload: {
      //     category: response.data // Assuming the response contains the updated category data
      //   }
      // });

      // Return the response data to the caller
      return response.data;
    } catch (error) {
      // Log any errors for debugging
      console.error("Error editing category:", error);

      // Return a rejected Promise with an error message
      return Promise.reject(error.message || 'Failed to edit category. Please try again.');
    }
  };
};


export const acceptOrder = (id) => {
  return async (dispatch) => {
    try {
      // Make the API call to update the category
      const response = await apiClient.post(ApiConstants.POST_ACCEPT_ORDER, id);

      console.log("accept order response:", response);

      // Dispatch an action to update Redux state if needed
      // dispatch({
      //   type: 'EDIT_ADMIN_CATEGORIE',
      //   payload: {
      //     category: response.data // Assuming the response contains the updated category data
      //   }
      // });

      // Return the response data to the caller
      return response.data;
    } catch (error) {
      // Log any errors for debugging
      console.error("Error accept order:", error);

      // Return a rejected Promise with an error message
      return Promise.reject(error.message || 'Failed to accept the order. Please try again.');
    }
  };
};


export const rejectOrder = (id) => {
  return async (dispatch) => {
    try {
      // Make the API call to update the category
      const response = await apiClient.post(ApiConstants.POST_REJECT_ORDER, id);

      console.log("reject order response:", response);

      // Dispatch an action to update Redux state if needed
      // dispatch({
      //   type: 'EDIT_ADMIN_CATEGORIE',
      //   payload: {
      //     category: response.data // Assuming the response contains the updated category data
      //   }
      // });

      // Return the response data to the caller
      return response.data;
    } catch (error) {
      // Log any errors for debugging
      console.error("Error reject oreder:", error);

      // Return a rejected Promise with an error message
      return Promise.reject(error.message || 'Failed to rejct the Order.Please try again.');
    }
  };
};



