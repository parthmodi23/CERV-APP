
const initialState = {
    userdata:null,
    user:null,
    role:null,
    success:false,
    message:null,
    registerusersuccess:false,
    userselectedrole:null,
    profilefilepath:null,
    passwordchangesuccess:false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return {
                ...state,
                user: action.payload.user,
                role: action.payload.role,
                success:false
            }

        case 'LOGIN':
            return{
                ...state,
                user: action.payload.user,
                role: action.payload.role,
                message:action.payload.message,
                success:false 
            }

        case 'REGISTER':
                return{
                   ...state,
                   registerusersuccess:action.payload.success
                }

        case 'SAVEUSERDATA':
            return {
                ...state,
                userdata:action.payload.userdata
            }

        case 'FORGOTPASSWORD':
            return{
                ...state,
                success:action.payload.success,
                message:action.payload.message
            }

        case 'STOREUSERROLEFRONTEND':
            return{
                ...state,
                userselectedrole:action.payload.role
            }
        case 'PROFILEPICTUREPATH':
            return{
                ...state,
                profilefilepath:action.payload.filepath
            }
        case 'CHNAGEPASSWORD':
                return{
                    ...state,
                    message:action.payload.message,
                    passwordchangesuccess:action.payload.success
                }
            case 'LOGOUT':
                return{
                    userdata:null,
                    user:null
                }
        default:
            return state;
    }
}