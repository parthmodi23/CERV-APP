import AsyncStorage from "@react-native-async-storage/async-storage";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const SEND_OTP = 'SEND_OTP'
export const REGISTER = 'REGISTER'
export const SAVEUSERDATA = 'SAVEUSERDATA'
export const FORGOTPASSWORD = 'FORGOTPASSWORD'
export const STOREUSERROLEFRONTEND='STOREUSERROLEFRONTEND'
export const PROFILEPICTUREPATH='PROFILEPICTUREPATH'
export const CHNAGEPASSWORD='CHNAGEPASSWORD'
// import Constants from 'expo-constants';

// const apiKey = Constants.manifest2.extra.API_KEY;



export const signup = (payload) => {
  console.log(payload)
  // return 
  return async (dispatch) => {

    const response = await fetch(
      `https://cerv-project.onrender.com/api/v1/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          confirmpassword: confirmpassword,
          role: role,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const resData = await response.json();

    dispatch({
      type: 'SIGNUP',
      payload: {
        //   token:resData.idToken,
        user: user,
        role: role
      }
    });
  };
};


export const login = (email, password) => {
 
    return async (dispatch) => {
      try {
      const response = await fetch(
        `https://cerv-project.onrender.com/api/v1/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password,
            // returnSecureToken: true
          })
        }
      );

    
      const resData = await response.json();
      console.log("resdata:",resData)
      dispatch({
        type: 'LOGIN',
        payload: {
          message:resData.message,
          token: resData.token,
          user: resData.data,
          role: resData.role,
        }
      });
      // if (!response.ok) {
      //   throw new Error(resData.message||"Login error");
      // }
      return resData
  } catch (error) {
    console.error('Login e:', error);
    throw error;
  }
}
}


  export const registeruser = (formdata) => {
    console.log("logfrbbnhghjhjhjhjhjhj", formdata);
  
    return async (dispatch) => {
      try {
        const response = await fetch(
          `http://cerv-project.onrender.com/api/v1/auth/register`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
          },
            body: formdata
          }
        );
  
        // if (!response.ok) {
        //   const errorResData = await response.json();
        //   const errorId = errorResData.error.message;
        //   let message = 'Something went wrong!';
        //   if (errorId === 'EMAIL_EXISTS') {
        //     message = 'This email exists already!';
        //   }
        //   throw new Error(message);
        // }
  
        const resData = await response.json();
        console.log("RESPONSE FROM USERREGISTER", resData);
        dispatch({
          type: 'REGISTER',
          payload: {
            success: resData.success,
            // user:resData.data,
            // role:resData.role
          }
        });
        return resData; // Return the response data if needed
      }
   catch (error) {
        console.error("Register user error:", error);
        throw error; // Rethrow the error for handling in the component
      }
    };
  }
  




  export const saveuserdata = (userdata) => {
    console.log("save user data", userdata)
    try{
    return {
      type: SAVEUSERDATA,
      payload: {
        userdata: userdata
      }
    }}catch(error){
      return error
    }
  }

  export const forgotpassword = (email) => {
    console.log("usermail", email)
    try{
    return async (dispatch) => {

      const response = await fetch(
        `http://cerv-project.onrender.com/api/v1/auth/forgot-password`,
        {
          method: 'POST',
          headers: {
            "Content-Type": 'multipart/json',
          },
          body: JSON.stringify({
            email: email
          })
        }
      );

      console.log("response data forgotpassword", response)
      // if (!response.ok) {
      //   const errorResData = await response.json();
      //   const errorId = errorResData.error.message;
      //   let message = 'Something went wrong!!';
      //   if (errorId === 'EMAIL_NOT_FOUND') {
      //     message = 'This email could not be found!';
      //   } else if (errorId === 'INVALID_PASSWORD') {
      //     message = 'This password is not valid!';
      //   }
      //   throw new Error(message);
      // }

      const resData = await response.json();
      console.log("RESPONSE FORGOTPASSWORD", resData)
      dispatch({
        type: 'FORGOTPASSWORD',
        payload: {
          success: resData.success,
          message: resData.message
          // user:resData.data,
          // role:resData.role
        }
      });
    }}catch(error){
      console.log(error)
      return error
    }
  };


  export const storeuserrole=(role)=>{
   try{
    return{
      type:STOREUSERROLEFRONTEND,
      payload:{
        role:role
      }
    }
   }catch(error){
    return error
   }
  }


  export const storeprofilepicturepath=(filepath)=>{
    try{
      return{
        type:PROFILEPICTUREPATH,
        payload:{
          filepath:filepath
        }
      }

    }catch(error){
      console.log(error)
      return error
    }
  }

  
  export const changepassword = (password) => {
    console.log("user password", password);
  
    return async (dispatch) => {
      try {
        const authuserToken=await AsyncStorage.getItem('userToken')
        const authToken='Bearer '+authuserToken
        console.log(authToken)
        const response = await fetch(
          `https://cerv-project.onrender.com/api/v1/auth/change-password`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': authToken
          },
            body: JSON.stringify({
              oldPassword:password.oldPassword,
              newPassword:password.newPassword
            })
          }
        );
  
        // if (!response.ok) {
        //   const errorResData = await response.json();
        //   const errorId = errorResData.error.message;
        //   let message = 'Something went wrong!';
        //   if (errorId === 'EMAIL_EXISTS') {
        //     message = 'This email exists already!';
        //   }
        //   throw new Error(message);
        // }
  
        const resData = await response.json();
        console.log("RESPONSE FROM CHANGEPASSWORD", resData);
        dispatch({
          type: 'CHANGEPASSWORD',
          payload: {
            success: resData.success,
            message:resData.message
            // user:resData.data,
            // role:resData.role
          }
        });
        return resData; 
      }
   catch (error) {
        console.error("change passwrod error:", error);
        throw error; // Rethrow the error for handling in the component
      }
    };
  }