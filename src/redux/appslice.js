import { createSlice } from "@reduxjs/toolkit";

const appslice=createSlice({
    name:"appslice",
    initialState:{
        open:false,
        emails:[],
        selectedemail:null,
        searchText:"",
        user:null,
    },
    reducers:{
        setopen:(state,action)=>{
            state.open=action.payload
        },
        setEmails:(state,action)=>{
            state.emails = action.payload;
        },
        setselectedemail:(state,action)=>{
            state.selectedemail = action.payload;
        },
        setSearchtext:(state,action)=>{
            state.searchText = action.payload;
        },
        setUser:(state,action)=>{
            state.user=action.payload;
        }
    }
})
export const { setopen, setEmails, setselectedemail, setSearchtext, setUser} =
  appslice.actions;
export default appslice.reducer;