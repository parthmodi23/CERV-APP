
const initialState={
    userProfileData:null,
    success:flase
}

export default (state=initialState,action)=>{
    switch(action.type){
        case "GET_USER_DATA":
            return{
                userProfileData:action.payload.userProfileData
            }
        case "EDIT_USER_DATA":
                return{
                    success:action.payload.success
                }
        default:
            return state
    }
}