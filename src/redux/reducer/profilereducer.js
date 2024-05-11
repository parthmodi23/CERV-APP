
const initialState = {
    userProfileData: null,
    userAddressData: null,
    success: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_DATA":
            return {
                userProfileData: action.payload.userProfileData
            }
        case "EDIT_USER_DATA":
            return {
                success: action.payload.success
            }
        case "GET_ALL_ADDRESS":
            return {
                success: action.payload.userAddressData
            }
        default:
            return state
    }
}