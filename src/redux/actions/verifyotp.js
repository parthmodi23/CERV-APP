import { confirmPasswordReset } from "firebase/auth";
import { HOST } from "../../apis/host";

export const SEND_NUMBER='SEND_NUMBER'
export const VERIFY_OTP='VERIFY_OTP'
export const RESEND_OTP='RESEND_OTP'


//here sendotp==sendphonennumber
export const sendotp = (phonenumber, countrycode) => {

    console.log(phonenumber,countrycode)
    try{
    return async (dispatch) => {
      const response = await fetch(
        HOST.CERVHOST+`/auth/send-otp`,
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone_no:phonenumber,
            country_code:countrycode,
            // returnSecureToken: true
          })
        }
      );

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = 'Something went wrong!!';
        if (errorId === 'EMAIL_NOT_FOUND') {
          message = 'This email could not be found!';
        } else if (errorId === 'INVALID_PASSWORD') {
          message = 'This password is not valid!';
        }
        throw new Error(message);
      }

      const resData = await response.json();
      console.log("resdatalog",resData)
      dispatch({ type: 'SEND_NUMBER' ,
      payload:{
        otporderid:resData.orderId,
        countrycode:countrycode,
        phonenumber:phonenumber
     }
      });
      return resData
    }}
    catch(error){
      console.log(error)
      return error
    }
  };


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
            orderId:otpData.orderid,
            country_code:otpData.countrycode,
            phone_no:otpData.phonenumber,
            returnSecureToken: true
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

  
  export const resendotp = (otporderid) => {
    console.log(otporderid);
  
      return async (dispatch) => {
        try {
          const response = await fetch(
          HOST.CERVHOST+`/auth/resend-otp`,
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
  