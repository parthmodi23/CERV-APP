
const initialState = {
    phonenumber:null,
    otporderid:null,
    countrycode:null,
    success:false,
    isVerify:false,
    message:null
}

export default (state=initialState, action) => {
    switch (action.type) {
        //here sendotp===phonenumbershare
        case 'SEND_NUMBER':
            console.log(action.token)
            return {
                phonenumber: action.payload.phonenumber,
                otporderid: action.payload.otporderid,
                countrycode: action.payload.countrycode,
                success:false,
                isVerify:false
            }
        case 'VERIFY_OTP':
            return{...state,
                success:action.payload.success,
                isVerify:action.payload.isVerify
            }

        case 'RESEND_OTP':
            return{
                ...state,
                message:action.payload.message
            }
        

        default:
            return state;
    }
}