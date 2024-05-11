
const initialState = {
    catererAdminCategories:null,
    catererSubCategories:null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURRENT_ORDER':
            return {
                catererAdminCategories: action.payload.catererAdminCAtegori
            }


        case 'GET_PAST_ORDER':
            return {
                ...state,
                catererSubCategories: action.payload.catererSubCategori
            }

        default:
            return state


    }
}