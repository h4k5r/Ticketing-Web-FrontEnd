import {createSlice} from "@reduxjs/toolkit";
import {staff} from "../components/AdminComponents/Lists/StaffList/StaffList";

export type staffListType = {
    isAddOpen:boolean,
    isResetOpen:boolean,
    isDeleteOpen:boolean,
    isChangeBusOpen:boolean,
    selectedStaffId:string,
    result:staff
}
const initStaffListState:staffListType = {
    isAddOpen:false,
    isResetOpen:false,
    isDeleteOpen:false,
    isChangeBusOpen:false,
    selectedStaffId:'',
    result: {mail:'',id:''}
}
const staffListSlice = createSlice({
    initialState: initStaffListState,
    name: 'staffListSlice',
    reducers: {
        openAdd (state) {
            state.isAddOpen = true;
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isChangeBusOpen = false;
        },
        openReset (state,action) {
            state.isAddOpen = false;
            state.isResetOpen = true;
            state.isDeleteOpen = false;
            state.isChangeBusOpen = false;
            state.selectedStaffId = action.payload.staffId;
        },
        openDelete (state,action) {
            state.isAddOpen = false;
            state.isResetOpen = false;
            state.isDeleteOpen = true;
            state.isChangeBusOpen = false;
            state.selectedStaffId = action.payload.staffId;
        },
        openChangeBus (state,action) {
            state.isAddOpen = false;
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isChangeBusOpen = true;
            state.selectedStaffId = action.payload.staffId;
        },
        closeAll (state) {
            state.isAddOpen = false;
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isChangeBusOpen = false;
            state.selectedStaffId = '';
            state.result = {
                mail:'',
                id:''
            }
        },
        setResult (state,action) {
            state.result = action.payload.result;
        }
    }
});
export const staffListAction = staffListSlice.actions;
export default staffListSlice;