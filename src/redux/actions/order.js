import AsyncStorage from "@react-native-async-storage/async-storage"
import { HOST } from "../../apis/host"
import createApiClient, { apiClient } from "../../helper/axioshelper";
import { ApiConstants } from "../../apis/apiconstant";
import CurrentOrder from "../../components/organisms/Customer/currentorder";
// import { API } from "../../apis/apis"

export const GET_CURRENT_ORDER = 'GET_CURRENT_ORDER'
export const GET_PAST_ORDER = 'GET_PAST_ORDER'

export const getCurrentOrderData = () => {
    return async (dispatch) => {
      try {
        const response = await apiClient.get(ApiConstants.GET_ORDERS + '?status=current');
        const data = response.data
        console.log(" current order log", response)
        if (!data.success) {
          throw new Error(data.message)
        }
        dispatch({
          type: 'GET_CURRENT_ORDER',
          payload: {
            currentOrderData: data.data
          }
        });
        return response.data;
      } catch (error) {
        console.log("new error",error.response)
        if (error?.response?.status == '404') {
          return Promise.reject(`something went wrong!\nPlease try after some time.`)
        }
        return Promise.reject(error.response.data.message);
      }
    };
  };


// export const editUesrData = (userData) => {
//   console.log('editUserData action called', userData);
//   return async (dispatch) => {
//     return apiClient.post(ApiConstants.EDIT_PROFILE_DATA, userData)
//       .then((response) => {
//         console.log("user info update log", response)
//         dispatch({
//           type: 'EDIT_USER_DATA',
//           payload: {
//             userProfileData: response.data.userData
//           }
//         });
//         return response.data;
//       })
//       .catch((error) => {
//         console.error("new error edit user", error.response.data);
//         throw error;
//       });
//   };
// };


// export const editUesrData = (userData) => {
//     console.log("edited user data",userData)
//     return async (dispatch) => {
//         try {
//             const userToken = await AsyncStorage.getItem('userToken')
//             const response = await fetch(
//                 HOST.CERVHOST+'/profile/edit-profile-data', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'x-access-token': userToken
//                 },
//                 body:userData
//             })

//             const resData = await response.json();
//             console.log("edit user data api log",resData.userData)
//             dispatch({ type:'EDIT_USER_DATA' , payload:{Success: resData.success }})
//             return resData

//         }catch (error){
//         console.log("user profile edit error",error)
//         }
//     }
//}

export const getPastOrderData = () => {
  return async (dispatch) => {
    try {
      const response = await apiClient.get(ApiConstants.GET_ORDERS + '?status=past');
      const data = response.data
      console.log(" past order log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      dispatch({
        type: 'GET_PAST_ORDER',
        payload: {
            pastOrderData: data.data
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


export const selectedProductData=()=>{

}