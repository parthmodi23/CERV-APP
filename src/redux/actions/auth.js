export const SIGNUP = 'SIGNUP';
export const  LOGIN = 'LOGIN';
export const SEND_OTP='SEND_OTP'
export const REGISTER='REGISTER'
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
          username:username,
          email: email,
          password: password,
          confirmpassword:confirmpassword,
          role:role,
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

    dispatch({ type: 'SIGNUP' ,
                payload:{
                //   token:resData.idToken,
                  user:user,
                  role:role
                 }
                });
            };
};


export const login = (email, password) => {
    console.log(email,password)
    return async (dispatch) => {
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
            returnSecureToken: true
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
      console.log(resData)
      dispatch({ type: 'LOGIN' ,
      payload:{
        token:resData.token,
        user:resData.data,
        role:resData.role
     }
      });
    }
  };
  


  export const registeruser = (formdata) => {

    console.log(formdata)
    return async (dispatch) => {
      
      // formData.append('returnSecureToken', true);
      const response = await fetch(
        `https://cerv-project.onrender.com/api/v1/auth/register`,
        {
          method: 'POST', 
          // headers: {
          //   'Content-Type': 'application/json'
          // },
          body: formdata
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
      console.log(resData)
      dispatch({ type: 'REGISTER' ,
      payload:{
        success:resData.success,
        // user:resData.data,
        // role:resData.role
     }
      });
    }
  };
  

  
