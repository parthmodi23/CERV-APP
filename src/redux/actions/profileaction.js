import AsyncStorage from "@react-native-async-storage/async-storage"
import { HOST } from "../../apis/host"
import createApiClient, { apiClient } from "../../helper/axioshelper";
import { ApiConstants } from "../../apis/apiconstant";
// import { API } from "../../apis/apis"

export const GET_USER_DATA = 'GET_USER_DATA'
export const EDIT_USER_DATA = 'EDIT_USER_DATA'
export const GET_ALL_ADDRESS = 'GET_ALL_ADDRESS'

export const getUserData = () => {
  // return async (dispatch) => {
  //     const userToken=await AsyncStorage.getItem('userToken')
  //     console.log(userToken)
  //   const jsonClient = createApiClient({ token: userToken });

  //   return await jsonClient.get('/profile/get-profile-data')
  //     .then((response) => {
  //       dispatch({
  //         type: 'GET_USER_DATA',
  //         payload: {
  //             userProfileData: response.data.userData
  //         }
  //       });
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       throw error;
  //     });
  // };

  return async (dispatch) => {

    return await apiClient.get('/profile/get-profile-data')
      .then((response) => {
        dispatch({
          type: 'GET_USER_DATA',
          payload: {
            userProfileData: response.data.userData
          }
        });
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };
};


export const editUesrData = (userData) => {
  console.log('editUserData action called', userData);
  return async (dispatch) => {
    return apiClient.post(ApiConstants.EDIT_PROFILE_DATA, userData)
      .then((response) => {
        console.log("user info update log", response)
        dispatch({
          type: 'EDIT_USER_DATA',
          payload: {
            userProfileData: response.data.userData
          }
        });
        return response.data;
      })
      .catch((error) => {
        console.error("new error edit user", error.response.data);
        throw error;
      });
  };
};


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

export const getUesrAddressData = () => {
  return async (dispatch) => {
    try {
      const response = await apiClient.get(ApiConstants.GET_ALL_ADDRESS);
      const data = response.data
      console.log(" single caterer log", response)
      if (!data.success) {
        throw new Error(data.message)
      }
      dispatch({
        type: 'GET_ALL_ADDRESS',
        payload: {
          singleCaterer: data.address
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


export const selectedProductData=()=>{

}