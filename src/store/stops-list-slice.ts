import {createSlice} from "@reduxjs/toolkit";
import {stop} from "../components/AdminComponents/Lists/StopsList/StopsList";


export type stopListType = {
    isEditOpen:boolean,
    isDeleteOpen:boolean,
    selectedStopId:string,
    results:stop[]
}
const initStopListState:stopListType = {
    isEditOpen:false,
    isDeleteOpen:false,
    selectedStopId:'',
    results:[]
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
        },
        addStopResults (state,action) {
            state.results = action.payload.results;
        }
    }
});
export const stopsListAction = stopsListSlice.actions;
export default stopsListSlice;