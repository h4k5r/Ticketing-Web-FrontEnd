import {createSlice, Dispatch} from "@reduxjs/toolkit";

export type authObjectType = {
    isLoggedIn: boolean,
    isAdmin: boolean,
    otpToken:string
}
const initAuth:authObjectType = {
    isLoggedIn:false,
    isAdmin:false,
    otpToken:''
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
        setToken (state,action) {
            state.otpToken = action.payload.otpToken
        },
        login (state){
            state.isLoggedIn = true;
        },
        logout (state) {
            state.isLoggedIn = false;
            state.isAdmin = false;
            state.otpToken = '';
        }
    }
});

type fun = () => void ;
type funParam = (checkIsAdmin:boolean) => void;
export const emailLogin =  (email:string,password:string,successHandler:funParam,failureHandler:fun) => {
    return (dispatch:Dispatch) => {
        fetch('http://localhost:8080/emailAuth',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
            .then((result) => {
                return result.json()
            })
            .then(data => {
                if(data.token) {
                    if(data.isAdmin) {
                        dispatch(authActions.login());
                        dispatch(authActions.adminIn());
                        localStorage.setItem('authToken',data.token);
                        localStorage.setItem('isAdmin',''+true);
                        setTimeout(() => {
                            localStorage.removeItem('authToken');
                        },3600000)
                        successHandler(true);
                        return;
                    }
                    dispatch(authActions.login());
                    localStorage.setItem('authToken',data.token);
                    setTimeout(() => {
                        localStorage.removeItem('authToken');
                    },3600000)
                    successHandler(false);
                }
            })
            .catch((error) => {
                console.log(error)
                failureHandler();
            })
    }
}
export const otpVerify = (otp:number,token:string,successHandler:fun,failureHandler:fun) => {
    return (dispatch:Dispatch) => {
        dispatch({type: "AuthSlice/login", payload: undefined});
        fetch('http://localhost:8080/otpVerify',{
            method:'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                otp:otp,
                token:token
            })
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                if(data.error) {
                    return;
                }
                localStorage.setItem('authToken',data.token);
                dispatch(authActions.login());
                dispatch(authActions.adminOut());
                successHandler();
            })
            .catch((error) => {
                console.log(error)
                failureHandler();
            })
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