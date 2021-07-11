import {createSlice} from "@reduxjs/toolkit";

type uiStateType = {
    isMobileMenuOpen:boolean
}
const initialState:uiStateType = {
    isMobileMenuOpen:false
}
const UiSlice = createSlice({
    name:'uiSlice',
    initialState: initialState,
    reducers:{
        openMobileMenu (state) {
            state.isMobileMenuOpen = true;
        },
        closeMobileMenu (state) {
            state.isMobileMenuOpen = false;
        }
    }
})
export default UiSlice;
export const uiAction = UiSlice.actions;