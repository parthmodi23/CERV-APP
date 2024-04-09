import { createSlice } from '@reduxjs/toolkit'

const initialState={
    isAuthenticate:false,
    role:null,
    user:null
}

export const authslice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        onLogin(state,action){
            state.isAuthenticate=true;
            state.user = action.payload.user;
            state.role=action.payload.role
        },
        onLogout(state,action){
            state.isAuthenticate=false;
            state.user = null;
            state.role=null;
        },
        onRegister(state,action){
            state.isAuthenticate = true;
            state.user = action.payload.user;
            state.role = action.payload.role; 
        }
    }
});

export const {login,logout,register} = authslice.actions;
export default authslice.reducer