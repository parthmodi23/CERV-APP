export const SEND_NUMBER='SEND_NUMBER'
export const VERIFY_OTP='VERIFY_OTP'
//here sendotp==sendphonennumber
export const sendotp = (phonenumber, countrycode) => {

    console.log(phonenumber,countrycode)
    return async (dispatch) => {
      const response = await fetch(
        `https://cerv-project.onrender.com/api/v1/auth/send-otp`,
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
    }
  };


  export const verifyotp = (otp, orderid,countrycode,phonenumber) => {

    console.log(phonenumber,countrycode)
    return async (dispatch) => {
      const response = await fetch(
        `https://cerv-project.onrender.com/api/v1/auth/verify-otp`,
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            otp:otp,
            orderId:orderid,
            country_code:countrycode,
            phone_no:phonenumber
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
      console.log("otpresponse",resData)
      dispatch({ type: 'VERIFY_OTP' ,
      payload:{
        success:resData.success,
        message:resData.message,
        isVerify:resData.isVerify
     }
      });
    }
  };