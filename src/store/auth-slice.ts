import {createSlice, Dispatch} from "@reduxjs/toolkit";

export type authObjectType = {
    isLoggedIn: boolean,
    isAdmin: boolean,
}
const initAuth:authObjectType = {
    isLoggedIn:false,
    isAdmin:false,
}

export const authSlice = createSlice({
    initialState: initAuth,
    name: 'AuthSlice',
    reducers: {
        adminIn (state) {
            state.isAdmin = true;
        },
        adminOut (state) {
            state.isAdmin = false
        },
        login (state){
            state.isLoggedIn = true;
        },
        logout (state) {
            state.isLoggedIn = false;
            state.isAdmin = false
        }
    }
});

type fun = () => void ;
type funParam = (checkIsAdmin:boolean) => void;
export const emailLogin =  (email:string,password:string,successHandler:funParam,failureHandler:fun) => {
    return (dispatch:Dispatch) => {
        console.log('in action creator');
        fetch('')
            .then((response) => {
                console.log(response)
                dispatch(authActions.login());
                // dispatch(authActions.adminIn());
                successHandler(false);
            })
            .catch((error) => {
                console.log(error)
                failureHandler();
            })
    }
}
export const otpVerify = (otp:number,successHandler:fun,failureHandler:fun) => {
    return (dispatch:Dispatch) => {
        dispatch({type: "AuthSlice/login", payload: undefined});
        fetch('')
            .then((response) => {
                console.log(response)
                dispatch(authActions.login());
                dispatch(authActions.adminOut());
                successHandler();
            })
            .catch((error) => {
                console.log(error)
                failureHandler();
            })
        console.log(otp)
    }
}
export const googleLogin = (successHandler:fun,failureHandler:fun) => {
    return (dispatch:Dispatch) => {
        fetch('')
            .then((response) => {
                console.log(response)
                dispatch(authActions.login())
                successHandler();
            })
            .catch((error) => {
                console.log(error)
                failureHandler();
            })
    }
}


export const authActions = authSlice.actions;