import {configureStore} from "@reduxjs/toolkit";
import { authSlice} from "./auth-slice";
import busesListSlice from "./buses-list-slice";

const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        busesList:busesListSlice.reducer
    }
});
export default store