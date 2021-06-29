import {createSlice} from "@reduxjs/toolkit";
import {stop} from "../components/AdminComponents/Lists/StopsList/StopsList";


export type stopListType = {
    isAddOpen:boolean,
    isEditOpen:boolean,
    isDeleteOpen:boolean,
    selectedStopId:string,
    results:stop[]
}
const initStopListState:stopListType = {
    isAddOpen:false,
    isEditOpen:false,
    isDeleteOpen:false,
    selectedStopId:'',
    results:[]
}
const stopsListSlice = createSlice({
    initialState: initStopListState,
    name: 'stopsListSlice',
    reducers: {
        openAdd (state) {
            state.isAddOpen = true;
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.selectedStopId = '';
        },
        openEdit (state,action) {
            state.isAddOpen = false;
            state.isEditOpen = true;
            state.isDeleteOpen = false;
            state.selectedStopId = action.payload.stopId;
        },
        openDelete (state,action) {
            state.isAddOpen = false;
            state.isEditOpen = false;
            state.isDeleteOpen = true;
            state.selectedStopId = action.payload.stopId;
        },
        closeAll (state) {
            state.isAddOpen = false;
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.selectedStopId = '';
        },
        addStopResults (state,action) {
            state.results = action.payload.results;
        },
        clearAll (state) {
            state.isAddOpen = false;
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.selectedStopId = '';
            state.results = [];
        }
    }
});
export const stopsListAction = stopsListSlice.actions;
export default stopsListSlice;