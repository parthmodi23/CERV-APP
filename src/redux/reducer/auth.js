

const initialState = {
    user:null,
    role:null,
    token:null,
    success:false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            console.log(action.token)
            return {
                token: action.payload.token,
                user: action.payload.user,
                role: action.payload.role,
                success:false
            }

        case 'LOGIN':
            return{
                token: action.payload.token,
                user: action.payload.user,
                role: action.payload.role,
                success:false 
            }

        case 'REGISTER':
                return{
                   ...state,
                   success:action.payload.success
                }

        default:
            return state;
    }
}