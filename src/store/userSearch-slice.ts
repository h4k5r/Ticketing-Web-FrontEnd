import {createSlice} from "@reduxjs/toolkit";

export type searchObjectType = {
    source:string,
    destination:string,
}
const initUserSearchSlice:searchObjectType = {
    source:'',
    destination:'',
}
export const userSearchSlice = createSlice({
    initialState: initUserSearchSlice,
    name:'UserSearchSlice',
    reducers: {
        setSearchData(state,action) {
            state.source = action.payload.source;
            state.destination = action.payload.destination;
        },
        clearState (state) {
            state.source = '';
            state.destination = '';
        }
    }
});
export const userSearchSliceActions = userSearchSlice.actions;
export default userSearchSlice