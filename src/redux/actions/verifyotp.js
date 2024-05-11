import { ApiConstants } from "../../apis/apiconstant";
import { HOST } from "../../apis/host";
import { apiClient } from "../../helper/axioshelper";

export const SEND_NUMBER = 'SEND_NUMBER'
export const VERIFY_OTP = 'VERIFY_OTP'
export const RESEND_OTP = 'RESEND_OTP'




export const sendotp = (phonenumber, countrycode) => {
  return async (dispatch) => {
    const userData = {
      phone_no: phonenumber,
      country_code: countrycode,
    };
    console.log("userdata log is here", userData)
    try {
      const response = await apiClient.post(ApiConstants.SEND_OTP, userData);
      console.log("user otp send data ===w>>>", response)
      dispatch({
        type: 'SEND_NUMBER',
        payload: {
          otporderid: response?.data?.orderId,
          countrycode: userData.country_code,
          phonenumber: userData.phone_no
        }
      });
      return response?.data;
    }
    catch (error) {
      console.error("Error in sending OTP:", error);
      return Promise.reject(error.response?.data || error.message);
    }
  };
};

// export const sendotp = (phonenumber, countrycode) => {

//     console.log(phonenumber,countrycode)
//     try{
//     return async (dispatch) => {
//       const response = await fetch(
//         HOST.CERVHOST+`/auth/send-otp`,
//         {
//           method: 'POST', 
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             phone_no:phonenumber,
//             country_code:countrycode,
//           })
//         }
//       );

//       if (!response.ok) {
//         const errorResData = await response.json();
//         const errorId = errorResData.error.message;
//         let message = 'Something went wrong!!';
//         if (errorId === 'EMAIL_NOT_FOUND') {
//           message = 'This email could not be found!';
//         } else if (errorId === 'INVALID_PASSWORD') {
//           message = 'This password is not valid!';
//         }
//         throw new Error(message);
//       }

//       const resData = await response.json();
//       console.log("resdatalog",resData)
//       dispatch({ type: 'SEND_NUMBER' ,
//       payload:{
//         otporderid:resData.orderId,
//         countrycode:countrycode,
//         phonenumber:phonenumber
//      }
//       });
//       return resData
//     }}
//     catch(error){
//       console.log(error)
//       return error
//     }
//   };


//***************************************** */
export const verifyotp = (otpData) => {
  try{ 
  return async (dispatch) => {
    const response = await fetch(
      HOST.CERVHOST+`/auth/verify-otp`,
      {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          otp:Number(otpData.otp),
          orderId:otpData.orderId,
          country_code:otpData.country_code,
          phone_no:otpData.phone_no,
        })
      }
    );

    const resData = await response.json();
    console.log("otpresponse",resData)
    dispatch({ type: 'VERIFY_OTP' ,
    payload:{
      success:resData.success,
      message:resData.message,
      isVerify:resData.isVerify
   }
    });  
    return resData
  } }
  catch(error){
    console.log(error)
    return error
  }
}; 




// export const verifyotp = (otporderid) => {

//   const otpOrderIdData = {
//     otp: Number(otporderid.otp),
//     orderId: otporderid.orderId,
//     country_code: otporderid.country_code,
//     phone_no: otporderid.phone_no,
//   }
//   return async (dispatch) => {
//     console.log("user form data is here=>====>>>>>", otpOrderIdData);
//     try {
//       const response = await apiClient.post(ApiConstants.VERIFY_OTP, otpOrderIdData);
//       console.log("user otp send data ===w>>>", response);

//       // Check if response indicates success
//       if (response.data.success) {
//         dispatch({
//           type: 'VERIFY_OTP',
//           payload: {
//             success: response?.data?.success,
//             message: response?.data?.message,
//             isVerify: response?.data?.isVerify
//           }
//         });
//         return response?.data;
//       } else {
//         // Handle invalid OTP error
//         throw new Error("Invalid OTP");
//       }
//     } catch (error) {
//       console.error("Error in verifying OTP:", error);
//       return Promise.reject(error.response?.data || error.message);
//     }
//   };
// };

// export const verifyotp = (otpData) => {

//   console.log("user otp data",otpData)
//   try{ 
//   return async (dispatch) => {
//     const response = await fetch(
//       HOST.CERVHOST+`/auth/verify-otp`,
//       {
//         method: 'POST', 
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           otp:Number(otpData.otp),
//           orderId:otpData.orderid,
//           country_code:otpData.countrycode,
//           phone_no:otpData.phonenumber,
//           returnSecureToken: true
//         })
//       }
//     ); 

//     const resData = await response.json();
//     console.log("otpresponse",resData)
//     dispatch({ type: 'VERIFY_OTP' ,
//     payload:{
//       success:resData.success,
//       message:resData.message,
//       isVerify:resData.isVerify
//    }
//     });  
//     return resData
//   } }
//   catch(error){
//     console.log(error)
//     return error
//   }
// };


export const resendotp = (otporderid) => {
  console.log(otporderid);

  return async (dispatch) => {
    try {
      const response = await fetch(
        HOST.CERVHOST + `/auth/resend-otp`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId: String(otporderid),
          }),
        }
      );

      if (!response.ok) {
        const errorResData = await response.json();
        const errorMessage = errorResData.message || 'Failed to resend OTP^^';
        return errorMessage;
      }

      const resData = await response.json();
      console.log("resendotpresponse", resData);
      dispatch({ type: 'RESEND_OTP', payload: { message: resData.message } });
      return resData;
    } catch (error) {
      // console.error("resend otp error:", error);
      throw new Error(error.message);
    }
  };
};
