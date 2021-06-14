import {createSlice} from "@reduxjs/toolkit";

export type stopListType = {
    isEditOpen:boolean,
    isDeleteOpen:boolean,
    selectedStopId:string
}
const initStopListState:stopListType = {
    isEditOpen:false,
    isDeleteOpen:false,
    selectedStopId:''
}
const stopsListSlice = createSlice({
    initialState: initStopListState,
    name: 'adminListSlice',
    reducers: {
        openEdit (state,action) {
            state.isEditOpen = true;
            state.isDeleteOpen = false;
            state.selectedStopId = action.payload.stopId;
        },
        openDelete (state,action) {
            state.isEditOpen = false;
            state.isDeleteOpen = true;
            state.selectedStopId = action.payload.stopId;
        },
        closeAll (state) {
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.selectedStopId = '';
        }
    }
});
export const stopsListAction = stopsListSlice.actions;
export default stopsListSlice;