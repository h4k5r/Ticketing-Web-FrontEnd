import {createSlice} from "@reduxjs/toolkit";

export type staffListType = {
    isResetOpen:boolean,
    isDeleteOpen:boolean,
    isChangeBusOpen:boolean,
    selectedStaffId:string
}
const initStaffListState:staffListType = {
    isResetOpen:false,
    isDeleteOpen:false,
    isChangeBusOpen:false,
    selectedStaffId:''
}
const staffListSlice = createSlice({
    initialState: initStaffListState,
    name: 'adminListSlice',
    reducers: {
        openReset (state,action) {
            state.isResetOpen = true;
            state.isDeleteOpen = false;
            state.isChangeBusOpen = false;
            state.selectedStaffId = action.payload.staffId;
        },
        openDelete (state,action) {
            state.isResetOpen = false;
            state.isDeleteOpen = true;
            state.isChangeBusOpen = false;
            state.selectedStaffId = action.payload.staffId;
        },
        openChangeBus (state,action) {
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isChangeBusOpen = true;
            state.selectedStaffId = action.payload.staffId;
        },
        closeAll (state) {
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isChangeBusOpen = false;
            state.selectedStaffId = '';
        }
    }
});
export const staffListAction = staffListSlice.actions;
export default staffListSlice;