import {createSlice} from "@reduxjs/toolkit";

export type userListType = {
    isResetOpen:boolean,
    isDeleteOpen:boolean,
    isHistoryOpen:boolean,
    selectedUserId:string
}
const initUserListState:userListType = {
    isResetOpen:false,
    isDeleteOpen:false,
    isHistoryOpen:false,
    selectedUserId:''
}
const userListSlice = createSlice({
    initialState: initUserListState,
    name: 'adminListSlice',
    reducers: {
        openReset (state,action) {
            state.isResetOpen = true;
            state.isDeleteOpen = false;
            state.isHistoryOpen = false;
            state.selectedUserId = action.payload.userId;
        },
        openDelete (state,action) {
            state.isResetOpen = false;
            state.isDeleteOpen = true;
            state.isHistoryOpen = false;
            state.selectedUserId = action.payload.userId;
        },
        openHistory (state,action) {
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isHistoryOpen = true;
            state.selectedUserId = action.payload.userId;
        },
        closeAll (state) {
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isHistoryOpen = false;
            state.selectedUserId = '';
        }
    }
});
export const userListAction = userListSlice.actions;
export default userListSlice;