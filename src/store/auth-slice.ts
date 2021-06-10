import {createSlice, Dispatch} from "@reduxjs/toolkit";
type fun = () => void ;
export type authObjectType = {
    isLoggedIn: boolean,
    isAdmin: boolean,
}
const initAuth:authObjectType = {
    isLoggedIn:false,
    isAdmin:false,
}

export const authSlice = createSlice({
    extraReducers: undefined,
    initialState: initAuth,
    name: 'AuthSlice',
    reducers: {
        adminIn (state) {
            state.isAdmin = true
        },
        adminOut (state) {
            state.isAdmin = false
        },
        login (state){
            state.isLoggedIn = true;
        },
        logout (state) {
            state.isLoggedIn = false;
        },
    }
});

export const emailLogin =  (email:string,password:string,successHandler:fun,failureHandler:fun) => {
    return (dispatch:Dispatch) => {
        //send request to server
        //receive JWT and type of user
        //if user type is admin check set isAdmin to true
        fetch('')
            .then((response) => {
                dispatch(authActions.login)
                console.log(response)
                // dispatch(authActions.adminIn);
                successHandler();
            })
            .catch((error) => {
                console.log(error)
                failureHandler();
            })
        console.log(email,password);
    }
}
export const otpVerify = (otp:number,successHandler:fun,failureHandler:fun) => {
    return (dispatch:Dispatch) => {
        fetch('')
            .then((response) => {
                console.log(response)
                dispatch(authActions.login);
                dispatch(authActions.adminOut);
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
                dispatch(authActions.login)
                successHandler();
            })
            .catch((error) => {
                console.log(error)
                failureHandler();
            })
    }
}


export const authActions = authSlice.actions;