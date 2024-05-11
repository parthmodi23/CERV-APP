import { selectedProductData } from "../actions/profileaction"

const initialState = {
    currentOrderData:null,
    pastOrderData:null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURRENT_ORDER':
            return {
                currentOrderData: action.payload.currentOrderData
            }

        case 'GET_PAST_ORDER':
            return {
                ...state,
                pastOrderData: action.payload.pastOrderData
            }

        default:
            return state


    }
}