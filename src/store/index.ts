import {configureStore} from "@reduxjs/toolkit";
import { authSlice} from "./auth-slice";
import busesListSlice from "./buses-list-slice";
import stopsListSlice from "./stops-list-slice";
import staffListSlice from "./staff-list-slice";
import userListSlice from "./users-list-slice";

const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        busesList:busesListSlice.reducer,
        stopsList:stopsListSlice.reducer,
        staffList:staffListSlice.reducer,
        usersList:userListSlice.reducer
    }
});
export default store