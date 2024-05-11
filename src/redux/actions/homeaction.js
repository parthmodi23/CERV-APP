import { Alert } from "react-native";
import { ApiConstants } from "../../apis/apiconstant";
import { apiClient } from "../../helper/axioshelper";


export const gatCatererData = () => {
  return async (dispatch) => {
    try {
      const response = await apiClient.get(ApiConstants.GET_CATERER_DATA);
      const data = response.data
      console.log("caterer data log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      dispatch({
        type: 'GET_CATERER_DATA',
        payload: {
          catererData: data.data
        }
      });
      return response.data;
    } catch (error) {
      if (error.response.status == '404') {
        return Promise.reject(`something went wrong!\nPlease try after some time.`)
      }
      return Promise.reject(error.response.data);
    }
  };
};


export const addFavoriteCaterer = (catererId) => {
  return async (dispatch) => {
    try {
      const response = await apiClient.post(ApiConstants.ADD_FAVORITE_CATERER, catererId);
      const data = response.data
      console.log("caterer like log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      // dispatch({
      //   type: 'ADD_CATERER_DATA',
      //   payload: {
      //     message:data.message
      //   }
      // });
      return response.data;
    } catch (error) {
      if (error.response.status == '404') {
        return Promise.reject(`something went wrong!\nPlease try after some time.`)
      }
      return Promise.reject(error.response.data);
    }
  };
};


export const deleteFavoriteCaterer = (catererId) => {
  return async (dispatch) => {
    try {
      const response = await apiClient.delete(ApiConstants.DELETE_FAVORITE_CATERER + `${catererId}`);
      const data = response.data
      console.log("caterer dislike log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      // dispatch({
      //   type: 'ADD_CATERER_DATA',
      //   payload: {
      //     message:data.message
      //   }
      // });
      return response.data;
    } catch (error) {
      if (error.response.status == '404') {
        return Promise.reject(`something went wrong!\nPlease try after some time.`)
      }
      return Promise.reject(error.response.data.message);
    }
  };
};

export const getSingleCatererData = (catererId) => {
  console.log("my caterer id data", catererId);

  return async (dispatch) => {
    try {
      const response = await apiClient.get(`${ApiConstants.GET_SINGLE_CATERER_DATA}/${catererId}`);

      const data = response.data;
      console.log("single caterer log", response);

      if (!data.success) {
        throw new Error(data.message);
      }

      dispatch({
        type: 'GET_SINGLE_CATERER_DATA',
        payload: {
          singleCaterer: data.data,
        },
      });

      return data; // Return the fetched data (optional)
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return Promise.reject('Something went wrong! Please try again later.');
      } else {
        return Promise.reject(error.response.data.message || 'An error occurred.');
      }
    }
  };
};


export const getSubCategoryData = (itemid) => {
  console.log("my caterer id data", itemid);

  return async (dispatch) => {
    try {
      const response = await apiClient.get(`${ApiConstants.GET_SUB_CATEGORY}/${itemid}/sub-categories`);
      const data = response.data;
      console.log("subcategory api log", response);

      if (!data.success) {
        throw new Error(data.message);
      }

      dispatch({
        type: 'GET_SUBCATEGORY_DATA',
        payload: {
          subCategory: data.data,
        },
      });

      return data; // Return the fetched data (optional)
    } catch (error) {
      console.log("subcategory error", error.response)
      if (error.response && error.response.status === 404) {
        return Promise.reject('Something went wrong! Please try again later.');
      } else {
        return Promise.reject(error.response.data || 'An error occurred.');
      }
    }
  };
};




export const slectedProductData = (productID) => {
  console.log("save user data", productID)
  // try {
  //   return {
  //     type: 'SELECTEDPRODUCTDATA',
  //     payload: {
  //       productData: productID
  //     }
  //   }
  // } catch (error) {
  //   return error 
  // }
  
  return {
    type:'SELECTEDPRODUCTDATA',
    payload: productID
    

  }
}



export const addCartProduct = (product) => {
  console.log("save user data", product)
  try {
    return {
      type: 'SELECTEDPRODUCTDATA',
      payload: {
        orderItem: product
      }
    }
  } catch (error) {
    return error
  }
}



export const incrementCounter = (productId,price) => {
  return {
    type: 'INCREMENTCOUNTER',
    payload: {
      quantity: 1,
      size:'Regular',
      price:price,
      productId: productId,
    }
  }
}

export const decrementCounter = (productId,price) => {
  return {
    type: 'DECREMENTCOUNTER',
    payload: {
      quantity: 1,
      price:price,
      productId: productId,
    }
  }
}


export const postCustomerData = (finalOrderData) => {
  console.log("my caterer id data", finalOrderData);

  return async (dispatch) => {
    try {
      const response = await apiClient.post(ApiConstants.POST_CUSTOMER_DATA,finalOrderData);
      const data = response.data;
      console.log("checkout log", data);

      // if (!data.success) {
      //   throw new Error(data.message);
      // }

      // dispatch({
      //   type: 'POST_CUSTOMER_DATA',
      //   payload: {
      //     subCategory: data.data,
      //   },
      // });

      return data; // Return the fetched data (optional)
    } catch (error) {
      console.log("customer data post error", error.response)
      if (error.response && error.response.status === 404) {
        return Promise.reject('Something went wrong! Please try again later.');
      } else {
        return Promise.reject(error.response.data.message || 'An error occurred.');
      }
    }
  };
};
