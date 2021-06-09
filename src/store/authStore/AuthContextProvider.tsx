import React, { useState} from "react";
import {AuthContext} from './auth-context'
const AuthContextProvider:React.FC = props => {
    const [isLoggedIn,setIsloggedIn] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    const phoneLoginHandler = (phoneNumber:number) => {
        console.log(phoneNumber)
    }
    const otpVerifyHandler = (otp:number) => {
        console.log(otp)
    }
    const emailRegisterHandler = (email:string,password:string) => {
        console.log(email,password)
    }
    const emailLoginHandler = (email:string,password:string) => {
        console.log(email,password)
        //send request to server
        //receive JWT and type of user
        //if user type is admin check set isAdmin to true
        setIsloggedIn(true);
        setIsAdmin(false)

    }
    const googleLoginHandler = () => {
        setIsloggedIn(true);
    };
    const LogoutHandler = () => {
        setIsloggedIn(false);
    }
    return (
        <AuthContext.Provider value={{
            isAdmin:isAdmin,
            isLoggedIn:isLoggedIn,
            emailRegister:emailRegisterHandler,
            emailLogin:emailLoginHandler,
            phoneLogin:phoneLoginHandler,
            otpVerify:otpVerifyHandler,
            googleLogin:googleLoginHandler,
            Logout:LogoutHandler,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;