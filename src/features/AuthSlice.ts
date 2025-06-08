import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

interface authState {
    isLoggedIn:boolean,
    userData:{
        $id:string,
        name:string,
        email:string
    }| null
}
const initialState :authState = {
    isLoggedIn:false,
    userData:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<authState["userData"]>)=>{
            state.isLoggedIn = true
            state.userData = action.payload
        },
        logout:(state)=>{
            state.isLoggedIn = false
            state.userData = null
        }
    }
})
export const {login,logout} = authSlice.actions
export default authSlice.reducer