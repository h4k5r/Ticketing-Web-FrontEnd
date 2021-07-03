import {createSlice} from "@reduxjs/toolkit";
import {busItem} from "../components/AdminComponents/Lists/BusesList/BusesList";

export type busListType = {
    isAddOpen:boolean
    isEditOpen:boolean,
    isDeleteOpen:boolean,
    selectedBusId:string
    results:busItem[]
}
const initBusListState:busListType = {
    isAddOpen:false,
    isEditOpen:false,
    isDeleteOpen:false,
    selectedBusId:'',
    results:[]
}
const busesListSlice = createSlice({
    initialState: initBusListState,
    name: 'busesListSlice',
    reducers: {
        openAdd (state) {
            state.isAddOpen = true;
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.selectedBusId = '';
        },
        openEdit (state,action) {
            state.isAddOpen = false;
            state.isEditOpen = true;
            state.isDeleteOpen = false;
            state.selectedBusId = action.payload.busId;
        },
        openDelete (state,action) {
            state.isAddOpen = false;
            state.isEditOpen = false;
            state.isDeleteOpen = true;
            state.selectedBusId = action.payload.busId;
        },
        closeAll (state) {
            state.isAddOpen = false;
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.selectedBusId = '';
        },
        addBusResults(state,action){
            state.results = action.payload.results
        },
        removeSingleResult (state,action) {
            state.isAddOpen = false;
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.results = state.results.filter((result:busItem) => {
                return !(result._id === action.payload.busId)
            });
            state.selectedBusId = '';

        },
        clearAll (state) {
            state.isAddOpen = false;
            state.isEditOpen = false;
            state.isDeleteOpen = false;
            state.selectedBusId = '';
            state.results = [];
        }
    }
});
export const busesListAction = busesListSlice.actions;
export default busesListSlice;