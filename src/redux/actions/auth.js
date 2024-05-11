import AsyncStorage from "@react-native-async-storage/async-storage";
import createApiClient, { apiClient } from "../../helper/axioshelper";
import { ApiConstants } from "../../apis/apiconstant";
import { HOST } from "../../apis/host";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const SEND_OTP = 'SEND_OTP'
export const REGISTER = 'REGISTER'
export const SAVEUSERDATA = 'SAVEUSERDATA'
export const FORGOTPASSWORD = 'FORGOTPASSWORD'
export const STOREUSERROLEFRONTEND = 'STOREUSERROLEFRONTEND'
export const PROFILEPICTUREPATH = 'PROFILEPICTUREPATH'
export const CHNAGEPASSWORD = 'CHNAGEPASSWORD'
export const LOGOUT = 'LOGOUT'



export const login = (email, password) => {
  return async (dispatch) => {
    const userData = {
      email: email,
      password: password
    };
    try {
      const response = await apiClient.post(ApiConstants.LOGIN, userData);
      dispatch({
        type: 'LOGIN',
        payload: {
          message: response?.data?.message,
          user: response?.data?.data,
          role: response?.data?.data?.role,
        }
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data.message);
    }
  };
};

// export const login = (email, password) => {
 
//   return async (dispatch) => {
//     try {
//     const response = await fetch(
//       HOST.CERVHOST+`/auth/login`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           // returnSecureToken: true
//         })
//       }
//     );

//     // if (!response.ok) {
//       // throw new Error(resData.message||"Login error");
//     // }

//     const resData = await response.json();
//     console.log("resdata:",resData)
//     if(!resData.success) { 
//       throw new Error(resData.message||'Invalid email id or password!')
//     }else{
//     dispatch({
//       type: 'LOGIN',
//       payload: {
//         message:resData.message,
//         token: resData?.token,
//         user: resData?.data,
//         role: resData?.data.role,
//       }
//     })
//     return resData}
// } catch (error) {
//   // console.error('Login egggggggggggg:', error);
//   throw error
// }
// }
// }

export const saveuserdata = (userdata) => {
  console.log("save user data", userdata)
  try{
  return {
    type: 'SAVEUSERDATA',
    payload: {
      userdata: userdata
    }
  }}catch(error){
    return error
  }
}


export const registeruser = (formdata) => {
  return async (dispatch) => {
    delete formdata.returnSecureToken;
    return apiClient.post(ApiConstants.REGISTER, formdata)
      .then((response) => {
        console.log("new error",response)
        dispatch({
          type: 'REGISTER',
          payload: {
            success: response.data.success,
          }
        });
        return response.data;
      })
      .catch((error) => {
        console.log("new",error);
        throw error;
      });
  };
};




export const forgotpassword = (email) => {
  return async (dispatch) => {
    const jsonClient = createApiClient('application/json');
    const userData = {
      email: email,
    };
    return jsonClient.post('/auth/forgot-password', userData)
      .then((response) => {
        dispatch({
          type: 'FORGOTPASSWORD',
          payload: {
            success: response.data.success,
            message: response.data.message
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


export const storeuserrole = (role) => {
  try {
    return {
      type: STOREUSERROLEFRONTEND,
      payload: {
        role: role
      }
    }
  } catch (error) {
    return error
  }
}


export const storeprofilepicturepath = (filepath) => {
  try {
    return {
      type: PROFILEPICTUREPATH,
      payload: {
        filepath: filepath
      }
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export const changeuserpassword = (password) => {
  console.log("mypassword is",password)
  return async (dispatch) => {
 
    const userData = {
      oldPassword: password.oldPassword,
      newPassword: password.newPassword,
    };
    return apiClient.put(ApiConstants.CHANGE_PASSWORD, userData)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'CHANGEPASSWORD',
          payload: {
            success: response.data.success,
            message: response.data.message
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


export const logout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem('userToken')
      dispatch({ type: 'LOGOUT' })
    }
    catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }
}