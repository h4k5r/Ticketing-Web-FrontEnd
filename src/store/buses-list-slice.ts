import {createSlice} from "@reduxjs/toolkit";

export type busListType = {
    isEditOpen:boolean,
    isDeleteOpen:boolean,
    selectedBusId:string
}
const initBusListState:busListType = {
    isEditOpen:false,
    isDeleteOpen:false,
    selectedBusId:''
}
const busesListSlice = createSlice({
    initialState: initBusListState,
    name: 'adminListSlice',
    reducers: {
        openEdit (state,action) {
            state.isEditOpen = true;
            state.isDeleteOpen = false;
            state.selectedBusId = action.payload.busId;
        },
        openDelete (state,action) {
            state.isEditOpen = false;
            state.isDeleteOpen = true;
            state.selectedBusId = action.payload.busId;
        },
        closeAll (state) {
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.selectedBusId = '';
        }
    }
});
export const busesListAction = busesListSlice.actions;
export default busesListSlice;