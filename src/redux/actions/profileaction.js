import AsyncStorage from "@react-native-async-storage/async-storage"
import { HOST } from "../../apis/host"
// import { API } from "../../apis/apis"

export const GET_USER_DATA = 'GET_USER_DATA'
export const EDIT_USER_DATA = 'EDIT_USER_DATA'


export const getUserData = () => {
    return async (dispatch) => {
        try {
            const userToken = await AsyncStorage.getItem('userToken')
            const response = await fetch(
                HOST.CERVHOST+'/profile/get-profile-data', {
                method: 'GET',
                headers: {
                    'x-access-token': userToken
                }
            })
            const resData = await response.json();
            console.log("response from api ref",resData.userData)
            dispatch({ type:'GET_USER_DATA' , payload:{userProfileData: resData.userData }})
            return resData
           
        }catch (error){
        console.log(" ref error",error)
        }
    }
}

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from 'axios';

// export const GET_USER_DATA = 'GET_USER_DATA';

// const defaultUrl = 'https://cerv-project.onrender.com';

// export const getUserData = () => {
//     return async (dispatch) => {
//         try {
//             const userToken = await AsyncStorage.getItem('userToken');
//             const response = await axios.get(
//                 defaultUrl + '/api/v1/profile/get-profile-data', {
//                 headers: {
//                     'x-access-token': userToken
//                 }
//             });
//             const resData = response.data;
//             console.log("response from api ref", resData);
//             dispatch({ type: GET_USER_DATA, payload: resData });
//             return resData;
//         } catch (error) {
//             console.log(" ref error", error);
//             // You may want to dispatch an action to handle the error state
//         }
//     };
// };

export const editUesrData = (userData) => {
    console.log("edited user data",userData)
    return async (dispatch) => {
        try {
            const userToken = await AsyncStorage.getItem('userToken')
            const response = await fetch(
                HOST.CERVHOST+'/profile/edit-profile-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': userToken
                },
                body:userData
            })

            const resData = await response.json();
            console.log("edit user data api log",resData.userData)
            dispatch({ type:'EDIT_USER_DATA' , payload:{Success: resData.success }})
            return resData
           
        }catch (error){
        console.log("user profile edit error",error)
        }
    }
}