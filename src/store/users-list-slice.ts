import {createSlice} from "@reduxjs/toolkit";
import {user} from "../components/AdminComponents/Lists/UsersList/UsersList";

export type userListType = {
    isAddOpen:boolean,
    isResetOpen:boolean,
    isDeleteOpen:boolean,
    isHistoryOpen:boolean,
    selectedUserId:string,
    result:user
}
const initUserListState:userListType = {
    isAddOpen:false,
    isResetOpen:false,
    isDeleteOpen:false,
    isHistoryOpen:false,
    selectedUserId:'',
    result:{
        userId:'',
        email:'',
        phone:'',
    }
}
const userListSlice = createSlice({
    initialState: initUserListState,
    name: 'userListSlice',
    reducers: {
        openAdd (state) {
            state.isAddOpen = true;
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isHistoryOpen = false;
            state.selectedUserId = '';
        },
        openReset (state,action) {
            state.isAddOpen = false;
            state.isResetOpen = true;
            state.isDeleteOpen = false;
            state.isHistoryOpen = false;
            state.selectedUserId = action.payload.userId;
        },
        openDelete (state,action) {
            state.isAddOpen = false;
            state.isResetOpen = false;
            state.isDeleteOpen = true;
            state.isHistoryOpen = false;
            state.selectedUserId = action.payload.userId;
        },
        openHistory (state,action) {
            state.isAddOpen = false;
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isHistoryOpen = true;
            state.selectedUserId = action.payload.userId;
        },
        closeAll (state) {
            state.isAddOpen = false;
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isHistoryOpen = false;
            state.selectedUserId = '';
        },
        setResultWithEmail (state,action) {
            state.result = {
                userId: action.payload.userId,
                email: action.payload.email,
                phone: '',
            }
        },
        setResultWithPhone (state,action) {
            state.result = {
                userId: action.payload.userId,
                email: '',
                phone: action.payload.phone,
            }
        },
        clearAll (state) {
            state.isAddOpen = false;
            state.isResetOpen = false;
            state.isDeleteOpen = false;
            state.isHistoryOpen = false;
            state.selectedUserId = '';
            state.result = {
                userId:'',
                email:'',
                phone:'',
            };
        }
    }
});
export const userListAction = userListSlice.actions;
export default userListSlice;