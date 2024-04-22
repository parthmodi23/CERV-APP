const initialState={
    catererData:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case 'SAVECATERERDATA' :
            return{
            catererData:action.payload.catererData}

        default:
            return state


    }
}